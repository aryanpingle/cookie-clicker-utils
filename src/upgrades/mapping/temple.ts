import type { Upgrade } from '../types.js';

export const TempleUpgrades = [
    { name: 'Golden idols', id: 238, type: 'pingle' },
    { name: 'Sacrifices', id: 239, type: 'pingle' },
    { name: 'Delicious blessing', id: 240, type: 'pingle' },
    { name: 'Sun festival', id: 241, type: 'pingle' },
    { name: 'Enlarged pantheon', id: 242, type: 'pingle' },
    { name: 'Great Baker in the sky', id: 243, type: 'pingle' },
    { name: 'Creation myth', id: 299, type: 'pingle' },
    { name: 'Theocracy', id: 312, type: 'pingle' },
    { name: 'Sick rap prayers', id: 433, type: 'pingle' },
    { name: 'Psalm-reading', id: 485, type: 'pingle' },
    { name: 'War of the gods', id: 511, type: 'pingle' },
    { name: 'A novel idea', id: 667, type: 'pingle' },
    { name: 'Apparitions', id: 705, type: 'pingle' },
    { name: 'Negatheism', id: 748, type: 'pingle' },
    { name: 'Temple traps', id: 845, type: 'pingle' },
] as const satisfies Array<Upgrade>;
