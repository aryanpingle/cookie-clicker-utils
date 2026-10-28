import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';
import { U } from '../upgrades/gen.js';

export function getFarmCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings[B.Farm]!;
    const baseCps = getBaseCps(B.Farm);

    let cps = baseCps;

    if (hasUpgrade(game, U.CHEAP_HOES)) cps *= 2;
    if (hasUpgrade(game, U.FERTILIZER)) cps *= 2;
    if (hasUpgrade(game, U.COOKIE_TREES)) cps *= 2;
    if (hasUpgrade(game, U.GENETICALLY_MODIFIED_COOKIES)) cps *= 2;
    if (hasUpgrade(game, U.GINGERBREAD_SCARECROWS)) cps *= 2;
    if (hasUpgrade(game, U.PULSAR_SPRINKLERS)) cps *= 2;
    if (hasUpgrade(game, U.FUDGE_FUNGUS)) cps *= 2;
    if (hasUpgrade(game, U.WHEAT_TRIFFIDS)) cps *= 2;
    if (hasUpgrade(game, U.HUMANE_PESTICIDES)) cps *= 2;
    if (hasUpgrade(game, U.BARNSTARS)) cps *= 2;
    if (hasUpgrade(game, U.LINDWORMS)) cps *= 2;
    if (hasUpgrade(game, U.GLOBAL_SEED_VAULT)) cps *= 2;
    if (hasUpgrade(game, U.REVERSE_VEGANISM)) cps *= 2;
    if (hasUpgrade(game, U.COOKIE_MULCH)) cps *= 2;
    if (hasUpgrade(game, U.SELF_DRIVING_TRACTORS)) cps *= 2;

    return cps * buildingInfo.currentUnits;
}
