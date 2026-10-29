import type { Upgrade } from '../types.js';

export const ShipmentUpgrades = [
    { name: 'Vanilla nebulae', id: 19, type: 'pingle' },
    { name: 'Wormholes', id: 20, type: 'pingle' },
    { name: 'Frequent flyer', id: 21, type: 'pingle' },
    { name: 'Warp drive', id: 48, type: 'pingle' },
    { name: 'Chocolate monoliths', id: 114, type: 'pingle' },
    { name: 'Generation ship', id: 196, type: 'pingle' },
    { name: 'Dyson sphere', id: 301, type: 'pingle' },
    { name: 'The final frontier', id: 314, type: 'pingle' },
    { name: 'Autopilot', id: 435, type: 'pingle' },
    { name: 'Restaurants at the end of the universe', id: 487, type: 'pingle' },
    { name: 'Universal alphabet', id: 513, type: 'pingle' },
    { name: 'Toroid universe', id: 669, type: 'pingle' },
    { name: 'Prime directive', id: 707, type: 'pingle' },
    { name: 'Cosmic foreground radiation', id: 750, type: 'pingle' },
    {
        name: 'At your doorstep in 30 minutes or your money back',
        id: 847,
        type: 'pingle',
    },
] as const satisfies Array<Upgrade>;
