import type { Upgrade } from '../types.js';

export const AlchemyLabUpgrades = [
    { name: 'Antimony', id: 22, type: 'pingle' },
    { name: 'Essence of dough', id: 23, type: 'pingle' },
    { name: 'True chocolate', id: 24, type: 'pingle' },
    { name: 'Ambrosia', id: 49, type: 'pingle' },
    { name: 'Aqua crustulae', id: 115, type: 'pingle' },
    { name: 'Origin crucible', id: 197, type: 'pingle' },
    { name: 'Theory of atomic fluidity', id: 302, type: 'pingle' },
    { name: 'Beige goo', id: 315, type: 'pingle' },
    { name: 'The advent of chemistry', id: 436, type: 'pingle' },
    { name: 'On second thought', id: 488, type: 'pingle' },
    { name: 'Public betterment', id: 514, type: 'pingle' },
    { name: 'Hermetic reconciliation', id: 670, type: 'pingle' },
    { name: 'Chromatic cycling', id: 708, type: 'pingle' },
    { name: 'Arcanized glassware', id: 751, type: 'pingle' },
    { name: 'The dose makes the poison', id: 848, type: 'pingle' },
] as const satisfies Array<Upgrade>;
