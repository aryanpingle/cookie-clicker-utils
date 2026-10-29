import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';
import { U } from '../upgrades/gen.js';

export function getMineCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings[B.Mine]!;
    const baseCps = getBaseCps(B.Mine);

    let cps = baseCps;

    if (hasUpgrade(game, U.SUGAR_GAS)) cps *= 2;
    if (hasUpgrade(game, U.MEGADRILL)) cps *= 2;
    if (hasUpgrade(game, U.ULTRADRILL)) cps *= 2;
    if (hasUpgrade(game, U.ULTIMADRILL)) cps *= 2;
    if (hasUpgrade(game, U.H_BOMB_MINING)) cps *= 2;
    if (hasUpgrade(game, U.COREFORGE)) cps *= 2;
    if (hasUpgrade(game, U.PLANETSPLITTERS)) cps *= 2;
    if (hasUpgrade(game, U.CANOLA_OIL_WELLS)) cps *= 2;
    if (hasUpgrade(game, U.MOLE_PEOPLE)) cps *= 2;
    if (hasUpgrade(game, U.MINE_CANARIES)) cps *= 2;
    if (hasUpgrade(game, U.BORE_AGAIN)) cps *= 2;
    if (hasUpgrade(game, U.AIR_MINING)) cps *= 2;
    if (hasUpgrade(game, U.CARAMEL_ALLOYS)) cps *= 2;
    if (hasUpgrade(game, U.DELICIOUS_MINERALOGY)) cps *= 2;
    if (hasUpgrade(game, U.MINESHAFT_SUPPORTS)) cps *= 2;

    return cps * buildingInfo.currentUnits;
}
