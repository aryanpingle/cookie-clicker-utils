import { UpgradeIdToChunkIdx, UpgradeIdToChunkPos } from './constants.js';
import type { ParsedSavefile } from './types.js';

export function addUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    game.upgrades[chunkIdx]! |= 1 << intraChunkPosition;
}

export function removeUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    game.upgrades[chunkIdx]! &= ~(1 << intraChunkPosition);
}

export function hasUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const chunkIdx = UpgradeIdToChunkIdx[upgradeIndex]!;
    const intraChunkPosition = UpgradeIdToChunkPos[upgradeIndex]!;
    return game.upgrades[chunkIdx]! & (1 << intraChunkPosition);
}
