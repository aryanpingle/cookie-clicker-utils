import type { Upgrade } from '../types.js';

export const FactoryUpgrades = [
    { name: 'Sturdier conveyor belts', id: 13, type: 'pingle' },
    { name: 'Child labor', id: 14, type: 'pingle' },
    { name: 'Sweatshop', id: 15, type: 'pingle' },
    { name: 'Radium reactors', id: 46, type: 'pingle' },
    { name: 'Recombobulators', id: 112, type: 'pingle' },
    { name: 'Deep-bake process', id: 194, type: 'pingle' },
    { name: 'Cyborg workforce', id: 297, type: 'pingle' },
    { name: '78-hour days', id: 310, type: 'pingle' },
    { name: 'Machine learning', id: 431, type: 'pingle' },
    { name: 'Brownie point system', id: 483, type: 'pingle' },
    { name: '"Volunteer" interns', id: 509, type: 'pingle' },
    { name: 'Behavioral reframing', id: 665, type: 'pingle' },
    { name: 'The infinity engine', id: 703, type: 'pingle' },
    { name: 'N-dimensional assembly lines', id: 746, type: 'pingle' },
    { name: 'Universal automation', id: 843, type: 'pingle' },
] as const satisfies Array<Upgrade>;
