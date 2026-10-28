import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade, hasUpgradeByIndex } from '../upgrade.js';
import { U } from '../upgrades/gen.js';

export function getCursorCps(game: ParsedSavefile) {
    const cursorBuildingInfo = game.buildings[B.Cursor]!;

    const baseCps = getBaseCps(B.Cursor);
    let cps = baseCps;
    let addition = 0;

    if (hasUpgradeByIndex(game, U.REINFORCED_MEMBRANE)) cps *= 2;
    if (hasUpgradeByIndex(game, U.CARPAL_TUNNEL_PREVENTION_CREAM)) cps *= 2;
    if (hasUpgradeByIndex(game, U.AMBIDEXTROUS)) cps *= 2;

    if (hasUpgradeByIndex(game, U.THOUSAND_FINGERS)) {
        for (const buildingInfo of game.buildings) {
            if (B.Cursor === 0) continue;
            addition += 0.1 * buildingInfo.currentUnits;
        }
    }

    if (hasUpgradeByIndex(game, U.MILLION_FINGERS)) {
        addition *= 5;
    }
    if (hasUpgradeByIndex(game, U.BILLION_FINGERS)) {
        addition *= 10;
    }
    if (hasUpgradeByIndex(game, U.TRILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.QUADRILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.QUINTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.SEXTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.SEPTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.OCTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.NONILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.DECILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgradeByIndex(game, U.UNDECILLION_FINGERS)) {
        addition *= 20;
    }

    return cps * cursorBuildingInfo.currentUnits;
}
