import type {
    BuildingIndex,
    BuildingInfo,
    ParsedSavefile,
} from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import { AllUpgrades } from '../index.js';

export function firstUpgradeYouDontHave(
    game: ParsedSavefile,
    b: BuildingIndex,
    upgrades: Array<number>,
): [number, number] | undefined {
    const building = game.buildings[b]!;

    for (const upgradeId of upgrades) {
        if (hasUpgrade(game, upgradeId)) continue;

        const upgrade = AllUpgrades[upgradeId]!;

        switch (upgrade.type) {
            case 'TieredUpgrade': {
                if (building.currentUnits < upgrade.qty) return undefined;
                else return [upgradeId, upgrade.price];
            }

            default:
                return undefined;
        }
    }
}
