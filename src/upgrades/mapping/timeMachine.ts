import type { Upgrade } from '../types.js';

export const TimeMachineUpgrades = [
    { name: 'Flux capacitors', id: 28, type: 'pingle' },
    { name: 'Time paradox resolver', id: 29, type: 'pingle' },
    { name: 'Quantum conundrum', id: 30, type: 'pingle' },
    { name: 'Causality enforcer', id: 51, type: 'pingle' },
    { name: 'Yestermorrow comparators', id: 117, type: 'pingle' },
    { name: 'Far future enactment', id: 199, type: 'pingle' },
    { name: 'Great loop hypothesis', id: 304, type: 'pingle' },
    { name: 'Cookietopian moments of maybe', id: 317, type: 'pingle' },
    { name: 'Second seconds', id: 438, type: 'pingle' },
    { name: 'Additional clock hands', id: 490, type: 'pingle' },
    { name: 'Nostalgia', id: 516, type: 'pingle' },
    { name: 'Split seconds', id: 672, type: 'pingle' },
    { name: 'Patience abolished', id: 710, type: 'pingle' },
    { name: 'Timeproof upholstery', id: 753, type: 'pingle' },
    { name: 'Rectifying a mistake', id: 850, type: 'pingle' },
] as const satisfies Array<Upgrade>;
