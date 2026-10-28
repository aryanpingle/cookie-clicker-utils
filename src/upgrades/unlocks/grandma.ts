import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import { U } from '../gen.js';
import { AllUpgrades } from '../index.js';
import type { UpgradeIdWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierGrandmaUpgrades(
    game: ParsedSavefile,
): Array<UpgradeIdWithCost> {
    const arr: UpgradeIdWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Grandma, [
        U.FORWARDS_FROM_GRANDMA,
        U.STEEL_PLATED_ROLLING_PINS,
        U.LUBRICATED_DENTURES,
        U.PRUNE_JUICE,
        U.DOUBLE_THICK_GLASSES,
        U.AGING_AGENTS,
        U.XTREME_WALKERS,
        U.THE_UNBRIDLING,
        U.REVERSE_DEMENTIA,
        U.TIMEPROOF_HAIR_DYES,
        U.GOOD_MANNERS,
        U.GENERATION_DEGENERATION,
        U.VISITS,
        U.KITCHEN_CABINETS,
        U.FOAM_TIPPED_CANES,
    ]);
    if (a) arr.push(a);

    function checkGrandmaVariant(upgradeIdx: number) {
        const upgrade = AllUpgrades[upgradeIdx]!;
        if (upgrade.type !== 'GrandmaVariant') return;

        const buildingIdx = upgrade.relatedBuilding;

        if (
            !hasUpgrade(game, upgradeIdx) &&
            game.buildings[B.Grandma]!.currentUnits >= 1 &&
            game.buildings[buildingIdx]!.currentUnits >= 15
        ) {
            arr.push([upgradeIdx, upgrade.price]);
        }
    }

    checkGrandmaVariant(U.FARMER_GRANDMAS);
    checkGrandmaVariant(U.MINER_GRANDMAS);
    checkGrandmaVariant(U.WORKER_GRANDMAS);
    checkGrandmaVariant(U.BANKER_GRANDMAS);
    checkGrandmaVariant(U.PRIESTESS_GRANDMAS);
    checkGrandmaVariant(U.WITCH_GRANDMAS);
    checkGrandmaVariant(U.COSMIC_GRANDMAS);
    checkGrandmaVariant(U.TRANSMUTED_GRANDMAS);
    checkGrandmaVariant(U.ALTERED_GRANDMAS);
    checkGrandmaVariant(U.GRANDMAS_GRANDMAS);
    checkGrandmaVariant(U.ANTIGRANDMAS);
    checkGrandmaVariant(U.RAINBOW_GRANDMAS);
    checkGrandmaVariant(U.LUCKY_GRANDMAS);
    checkGrandmaVariant(U.METAGRANDMAS);
    checkGrandmaVariant(U.BINARY_GRANDMAS);
    checkGrandmaVariant(U.ALTERNATE_GRANDMAS);
    checkGrandmaVariant(U.BRAINY_GRANDMAS);
    checkGrandmaVariant(U.CLONE_GRANDMAS);

    return arr;
}
