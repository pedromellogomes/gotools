import { round, floor, max } from 'mathjs';

/**
 *
 * @param {JSON} stats - PokeAPI JSON response.
 * stats[].base_stat
 * stats[0] = hp;
 * stats[1] = attack;
 * stats[2] = defense;
 * stats[3] = special-attack;
 * stats[4] = special-defense;
 * stats[5] = speed;
 *
 */
export function getBaseStats(stats) {
    const [higherDEF, lowerDEF] = (stats[2].base_stat > stats[4].base_stat) ?
        [stats[2].base_stat, stats[4].base_stat] : [stats[4].base_stat, stats[2].base_stat];
    const [higherATK, lowerATK] = (stats[1].base_stat > stats[3].base_stat) ?
        [stats[1].base_stat, stats[3].base_stat] : [stats[3].base_stat, stats[1].base_stat];

    const scaledATK = round(2 * ((7/8 * higherATK) + (1/8 * lowerATK)));
    const scaledDEF = round(2 * ((5/8 * higherDEF) + (3/8 * lowerDEF)));
    const speedMOD  = 1 + ((stats[5].base_stat - 75) / 500);

    const baseATK = round(scaledATK * speedMOD);
    const baseDEF = round(scaledDEF * speedMOD);
    const baseSTA = floor(stats[0].base_stat * 1.75 + 50);

    return { baseATK, baseDEF, baseSTA };
}

export function sumStatsWithIv(baseStats, ivCombination) {
    const { baseATK, baseDEF, baseSTA } = baseStats;
    const { ivATK, ivDEF, ivSTA } = ivCombination;

    const ATK = baseATK + ivATK;
    const DEF = baseDEF + ivDEF;
    const STA = baseSTA + ivSTA;

    return { ATK, DEF, STA };
}

export function getCombatPower(baseStats, ivCombination, CPM) {
    const { ATK, DEF, STA } = sumStatsWithIv(baseStats, ivCombination);

    return max(10 , floor((ATK * (DEF**(1/2)) * (STA**(1/2)) * (CPM**2)) / 10 ));
}

export function getStatsAtLevel(baseStats, ivCombination, CPM) {
    let { ATK, DEF, STA } = sumStatsWithIv(baseStats, ivCombination);

    ATK = ATK * CPM;
    DEF = DEF * CPM;
    STA = STA * CPM;

    return { ATK, DEF, STA };
}

export function getShadowStats(baseStatsAtLevel) {
    let { ATK, DEF, STA } = baseStatsAtLevel;
    ATK = (ATK * 1.2).toFixed(2);
    DEF = (DEF * 0.8).toFixed(2);

    return { ATK, DEF, STA };
}

export function statProduct(baseStatsAtLevel) {
    const { ATK, DEF, STA } = baseStatsAtLevel;
    return ATK  * DEF * STA;
}

/**
 * TODO: Rewrite this in a more elegant and efficient way.
 */
export function levelCap(baseStats, ivCombination, league, cpmArray) {
    const MAX_LEVEL = 78;
    let level, cp, index = 0;
    for (let i = MAX_LEVEL; i >= 0; i--) {
        cp = getCombatPower(baseStats, ivCombination, cpmArray[i]);
        if(cp <= league){
            index = i;
            level = (i / 2) + 1;
            break;
        }
    }

    return { index, level, cp };
}
