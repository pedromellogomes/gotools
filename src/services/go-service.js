import { levelCap, baseStatsByLevel, calcStatsProduct } from './go-fns';
import { ivCombinationList, cpMultiplierArray } from '../data/data';

export const URL = 'https://pokeapi.co/api/v2';

export function pokeAPI(name) {
    const data = async () => {
        const response = await fetch(`${URL}/pokemon/${name.toLowerCase()}`);
        const data = await response.json();

        return Promise.resolve(data);
    }

    return data();
}

export function evolutionChain(id) {
    const data = async () => {
        const response = await fetch(`${URL}/evolution-chain/${id}`);
        const data = await response.json();

        return Promise.resolve(data);
    }

    return data();
}

/**
 * TODO: Rewrite this in a more elegant and efficient way.
 */
export function calcRanking(baseStats, league) {
    let rank = [];
    for (let index = 0; index < ivCombinationList.length; index++) {
        let levelAndCP   = levelCap(baseStats, ivCombinationList[index], league, cpMultiplierArray)
        let statsAtLevel = baseStatsByLevel(baseStats, ivCombinationList[index], cpMultiplierArray[levelAndCP.index])
        let statsProduct = calcStatsProduct(baseStats, ivCombinationList[index], cpMultiplierArray[levelAndCP.index]);

        rank.push({
            level: levelAndCP.level,
            cp: levelAndCP.cp,
            product: statsProduct,
            iv: {
                ATK: ivCombinationList[index].ivATK,
                DEF: ivCombinationList[index].ivDEF,
                STA: ivCombinationList[index].ivSTA
            },
            baseStats: {
                ATK: statsAtLevel.ATK.toFixed(2),
                DEF: statsAtLevel.DEF.toFixed(2),
                STA: statsAtLevel.STA.toFixed(2)
            },
        });
    }

    rank.sort((a, b) => b.product-a.product);
    return rank;
}

export function getRankPosition(rank, iv) {
    const index = rank.findIndex(position => JSON.stringify(position.iv) === JSON.stringify(iv));
    const pokemon = rank[index];
    return { pokemon, index };
}
