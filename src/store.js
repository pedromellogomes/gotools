import { writable, readable, derived, get } from 'svelte/store';
import { calcRanking, getRankPosition } from './services/go-service';
import { calcBaseStats } from './services/go-fns';

/** Interface */
export const Leagues = { BABY: 500, GREAT: 1500, ULTRA: 2500 }

export const Pokemon = writable({
    "id": 132,
    "name" : "azumarill",
    "stats": [
        { "base_stat": 100 },
        { "base_stat": 50 },
        { "base_stat": 80 },
        { "base_stat": 60 },
        { "base_stat": 80 },
        { "base_stat": 50 }
    ],
    "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    }
});
export const IV = writable({ ATK: 8, DEF: 15, STA: 15 });
export const League = writable(Leagues.GREAT);

export const Rank = derived([Pokemon, League], ([$Pokemon, $League]) => {
    const _baseStats = calcBaseStats($Pokemon.stats);
    return calcRanking(_baseStats, $League);
});

export const Position = derived([Rank, IV], ([$Rank, $IV]) => {
    return getRankPosition($Rank, $IV);
});

