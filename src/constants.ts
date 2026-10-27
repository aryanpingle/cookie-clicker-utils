export const UNIT_COST_MULT = 1.15;
export const NUM_BUILDINGS = 20;
export const NUM_UPGRADES = 876;

export const UPGRADE_CHUNK_SIZE = 31;
export const NUM_UPGRADE_CHUNKS = Math.ceil(NUM_UPGRADES / UPGRADE_CHUNK_SIZE);

export const BUILDING_NAMES = [
    'Cursor',
    'Grandma',
    'Farm',
    'Mine',
    'Factory',
    'Bank',
    'Temple',
    'Wizard Tower',
    'Shipment',
    'Alchemy Lab',
    'Portal',
    'Time Machine',
    'Antimatter Condenser',
    'Prism',
    'Chancemaker',
    'Fractal Engine',
    'Javascript Console',
    'Idleverse',
    'Cortex Baker',
    'You',
] as const;

export type BuildingName = (typeof BUILDING_NAMES)[number];

/** Maps a building name to its index / id */
export const B: Record<BuildingName, number> = Object.fromEntries(
    BUILDING_NAMES.map((name, idx) => [name, idx]),
) as Record<BuildingName, number>;

export function getNextUnitCost(baseCost: number, unitsSoFar: number) {
    return Math.ceil(baseCost * Math.pow(UNIT_COST_MULT, unitsSoFar));
}
