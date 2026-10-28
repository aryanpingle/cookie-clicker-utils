import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import { U } from '../gen.js';
import type { UpgradeIdWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierFarmUpgrades(
    game: ParsedSavefile,
): UpgradeIdWithCost[] {
    const arr: UpgradeIdWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Farm, [
        U.CHEAP_HOES,
        U.FERTILIZER,
        U.COOKIE_TREES,
        U.GENETICALLY_MODIFIED_COOKIES,
        U.GINGERBREAD_SCARECROWS,
        U.PULSAR_SPRINKLERS,
        U.FUDGE_FUNGUS,
        U.WHEAT_TRIFFIDS,
        U.HUMANE_PESTICIDES,
        U.BARNSTARS,
        U.LINDWORMS,
        U.GLOBAL_SEED_VAULT,
        U.REVERSE_VEGANISM,
        U.COOKIE_MULCH,
        U.SELF_DRIVING_TRACTORS,
    ]);
    if (a) arr.push(a);

    return arr;
}
