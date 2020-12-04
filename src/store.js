import { writable, readable, derived, get } from 'svelte/store';
import { getRank, getRankPosition } from './services/go-service';
import { getBaseStats } from './services/go-fns';

import azumarill from './data/azumarill.json';

/** Interface */
export const Leagues = { BABY: 500, GREAT: 1500, ULTRA: 2500, MASTER: 10000 }

export const Pokemon = writable(azumarill);
export const IV      = writable({ ATK: 8, DEF: 15, STA: 15 });
export const League  = writable(Leagues.GREAT);

export const Rank = derived([Pokemon, League], ([$Pokemon, $League]) => {
    const _baseStats = getBaseStats($Pokemon.stats);
    return getRank(_baseStats, $League);
});

export const Position = derived([Rank, IV], ([$Rank, $IV]) => {
    return getRankPosition($Rank, $IV);
});

