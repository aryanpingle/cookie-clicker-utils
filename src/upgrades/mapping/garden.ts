import type { Upgrade } from '../types.js';

export const GardenUpgrades = [
    { name: 'Fern tea', id: 474, type: 'pingle' },
    { name: 'Ichor syrup', id: 475, type: 'pingle' },
] as const satisfies Array<Upgrade>;
