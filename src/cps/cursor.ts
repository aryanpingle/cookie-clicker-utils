import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';
import { U } from '../upgrades/gen.js';

export function getCursorCps(game: ParsedSavefile) {
    const cursorBuildingInfo = game.buildings[B.Cursor]!;

    const baseCps = getBaseCps(B.Cursor);
    let cps = baseCps;
    let addition = 0;

    if (hasUpgrade(game, U.REINFORCED_MEMBRANE)) cps *= 2;
    if (hasUpgrade(game, U.CARPAL_TUNNEL_PREVENTION_CREAM)) cps *= 2;
    if (hasUpgrade(game, U.AMBIDEXTROUS)) cps *= 2;

    if (hasUpgrade(game, U.THOUSAND_FINGERS)) {
        for (const buildingInfo of game.buildings) {
            if (B.Cursor === 0) continue;
            addition += 0.1 * buildingInfo.currentUnits;
        }
    }

    if (hasUpgrade(game, U.MILLION_FINGERS)) {
        addition *= 5;
    }
    if (hasUpgrade(game, U.BILLION_FINGERS)) {
        addition *= 10;
    }
    if (hasUpgrade(game, U.TRILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.QUADRILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.QUINTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.SEXTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.SEPTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.OCTILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.NONILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.DECILLION_FINGERS)) {
        addition *= 20;
    }
    if (hasUpgrade(game, U.UNDECILLION_FINGERS)) {
        addition *= 20;
    }

    return cps * cursorBuildingInfo.currentUnits;
}
