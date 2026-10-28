import { UpgradeIdToChunkIdx, UpgradeIdToChunkPos } from './constants.js';
import type { ParsedSavefile } from './types.js';
import { AllUpgrades } from './upgrades/index.js';
import type { UpgradeName } from './upgrades/types.js';

export function addUpgrade(game: ParsedSavefile, upgradeName: UpgradeName) {
    const upgradeIndex = AllUpgrades[upgradeName].id;
    addUpgradeByIndex(game, upgradeIndex);
}

export function addUpgradeByIndex(game: ParsedSavefile, upgradeIndex: number) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    game.upgrades[chunkIdx]! |= 1 << intraChunkPosition;
}

export function removeUpgrade(game: ParsedSavefile, upgradeName: UpgradeName) {
    const upgradeIndex = AllUpgrades[upgradeName].id;
    removeUpgradeByIndex(game, upgradeIndex);
}

export function removeUpgradeByIndex(
    game: ParsedSavefile,
    upgradeIndex: number,
) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    game.upgrades[chunkIdx]! &= ~(1 << intraChunkPosition);
}

export function hasUpgrade(game: ParsedSavefile, upgradeName: UpgradeName) {
    const upgradeIndex = AllUpgrades[upgradeName].id;
    return hasUpgradeByIndex(game, upgradeIndex);
}

export function hasUpgradeByIndex(game: ParsedSavefile, upgradeIndex: number) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    return game.upgrades[chunkIdx]! & (1 << intraChunkPosition);
}
