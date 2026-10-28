import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgradeByIndex } from '../upgrade.js';
import { U } from '../upgrades/gen.js';

export function getGrandmaCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings[B.Grandma]!;
    const baseCps = getBaseCps(B.Grandma);

    let cps = baseCps;

    // Tiered
    if (hasUpgradeByIndex(game, U.FORWARDS_FROM_GRANDMA)) cps *= 2;
    if (hasUpgradeByIndex(game, U.STEEL_PLATED_ROLLING_PINS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.LUBRICATED_DENTURES)) cps *= 2;
    if (hasUpgradeByIndex(game, U.PRUNE_JUICE)) cps *= 2;
    if (hasUpgradeByIndex(game, U.DOUBLE_THICK_GLASSES)) cps *= 2;
    if (hasUpgradeByIndex(game, U.AGING_AGENTS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.XTREME_WALKERS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.THE_UNBRIDLING)) cps *= 2;
    if (hasUpgradeByIndex(game, U.REVERSE_DEMENTIA)) cps *= 2;
    if (hasUpgradeByIndex(game, U.TIMEPROOF_HAIR_DYES)) cps *= 2;
    if (hasUpgradeByIndex(game, U.GOOD_MANNERS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.GENERATION_DEGENERATION)) cps *= 2;
    if (hasUpgradeByIndex(game, U.VISITS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.KITCHEN_CABINETS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.FOAM_TIPPED_CANES)) cps *= 2;

    // Grandma variant
    if (hasUpgradeByIndex(game, U.FARMER_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.MINER_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.WORKER_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.COSMIC_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.TRANSMUTED_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.ALTERED_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.GRANDMAS_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.ANTIGRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.RAINBOW_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.BANKER_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.PRIESTESS_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.WITCH_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.LUCKY_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.METAGRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.BINARY_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.ALTERNATE_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.BRAINY_GRANDMAS)) cps *= 2;
    if (hasUpgradeByIndex(game, U.CLONE_GRANDMAS)) cps *= 2;

    return cps * buildingInfo.currentUnits;
}
