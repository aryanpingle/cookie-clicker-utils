import {
    NUM_UPGRADE_CHUNKS,
    NUM_UPGRADES,
    UPGRADE_CHUNK_SIZE,
} from '../constants.js';

export function parseUpgradestring(upgradeString: string): Array<number> {
    const chunks = new Array(NUM_UPGRADE_CHUNKS).fill(0);

    for (let upgradeIdx = 0; upgradeIdx < NUM_UPGRADES; ++upgradeIdx) {
        const srcbitIdx = 2 * upgradeIdx + 1;
        const bitVal = upgradeString[srcbitIdx] === '1' ? 1 : 0;

        // Find which chunk to set it in
        const chunkIdx = Math.floor(upgradeIdx / UPGRADE_CHUNK_SIZE);
        let chunk = chunks[chunkIdx];

        const intraChunkPosition = upgradeIdx % UPGRADE_CHUNK_SIZE;
        chunk |= bitVal << intraChunkPosition;

        chunks[chunkIdx] = chunk;
    }

    return chunks;
}

export function serializeUpgrades(chunks: number[]): string {
    let strArr = new Array(NUM_UPGRADES).fill('');

    for (let upgradeIdx = 0; upgradeIdx < NUM_UPGRADES; ++upgradeIdx) {
        const chunkIdx = Math.floor(upgradeIdx / UPGRADE_CHUNK_SIZE);
        const chunk = chunks[chunkIdx]!;

        const intraChunkPosition = upgradeIdx % UPGRADE_CHUNK_SIZE;
        const bitVal = chunk & (1 << intraChunkPosition); // either 0 or non-0

        strArr[upgradeIdx] = bitVal ? '01' : '00';
    }

    return strArr.join('');
}
