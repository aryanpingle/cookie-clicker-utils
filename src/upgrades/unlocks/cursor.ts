import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import { U } from '../gen.js';
import type { UpgradeIdWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierCursorUpgrades(
    game: ParsedSavefile,
): UpgradeIdWithCost[] {
    const arr: UpgradeIdWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Cursor, [
        U.REINFORCED_INDEX_FINGER,
        U.CARPAL_TUNNEL_PREVENTION_CREAM,
        U.AMBIDEXTROUS,
    ]);
    if (a) arr.push(a);

    const b = firstUpgradeYouDontHave(game, B.Cursor, [
        U.THOUSAND_FINGERS,
        U.MILLION_FINGERS,
        U.BILLION_FINGERS,
        U.TRILLION_FINGERS,
        U.QUADRILLION_FINGERS,
        U.QUINTILLION_FINGERS,
        U.SEXTILLION_FINGERS,
        U.SEPTILLION_FINGERS,
        U.OCTILLION_FINGERS,
        U.NONILLION_FINGERS,
        U.DECILLION_FINGERS,
        U.UNDECILLION_FINGERS,
    ]);
    if (b) arr.push(b);

    return arr;
}
