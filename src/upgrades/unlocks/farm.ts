import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import type { UpgradeNameWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierFarmUpgrades(
    game: ParsedSavefile,
): UpgradeNameWithCost[] {
    const arr: UpgradeNameWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Farm, [
        'Cheap hoes',
        'Fertilizer',
        'Cookie trees',
        'Genetically-modified cookies',
        'Gingerbread scarecrows',
        'Pulsar sprinklers',
        'Fudge fungus',
        'Wheat triffids',
        'Humane pesticides',
        'Barnstars',
        'Lindworms',
        'Global seed vault',
        'Reverse-veganism',
        'Cookie mulch',
        'Self-driving tractors',
    ]);
    if (a) arr.push(a);

    return arr;
}
