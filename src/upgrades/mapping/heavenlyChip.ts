import type { Upgrade } from '../types.js';

export const HeavenlyChipUpgrades = [
    { name: 'Heavenly chip secret', id: 129, type: 'pingle' },
    { name: 'Heavenly cookie stand', id: 130, type: 'pingle' },
    { name: 'Heavenly bakery', id: 131, type: 'pingle' },
    { name: 'Heavenly confectionery', id: 132, type: 'pingle' },
    { name: 'Heavenly key', id: 133, type: 'pingle' },
] as const satisfies Array<Upgrade>;
