import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import { U } from '../gen.js';
import type { UpgradeIdWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierMineUpgrades(
    game: ParsedSavefile,
): UpgradeIdWithCost[] {
    const arr: UpgradeIdWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Mine, [
        U.SUGAR_GAS,
        U.MEGADRILL,
        U.ULTRADRILL,
        U.ULTIMADRILL,
        U.H_BOMB_MINING,
        U.COREFORGE,
        U.PLANETSPLITTERS,
        U.CANOLA_OIL_WELLS,
        U.MOLE_PEOPLE,
        U.MINE_CANARIES,
        U.BORE_AGAIN,
        U.AIR_MINING,
        U.CARAMEL_ALLOYS,
        U.DELICIOUS_MINERALOGY,
        U.MINESHAFT_SUPPORTS,
    ]);
    if (a) arr.push(a);

    return arr;
}
