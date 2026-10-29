import type { Upgrade } from '../types.js';

export const DragonUpgrades = [
    { name: 'A crumbly egg', id: 324, type: 'pingle' },
    { name: 'Dragon scale', id: 648, type: 'pingle' },
    { name: 'Dragon claw', id: 649, type: 'pingle' },
    { name: 'Dragon fang', id: 650, type: 'pingle' },
    { name: 'Dragon teddy bear', id: 651, type: 'pingle' },
] as const satisfies Array<Upgrade>;
