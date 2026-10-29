import type { Upgrade } from '../types.js';

export const KittenUpgrades = [
    { name: 'Kitten helpers', id: 31, type: 'pingle' },
    { name: 'Kitten workers', id: 32, type: 'pingle' },
    { name: 'Kitten engineers', id: 54, type: 'pingle' },
    { name: 'Kitten overseers', id: 108, type: 'pingle' },
    { name: 'Kitten managers', id: 187, type: 'pingle' },
    { name: 'Kitten accountants', id: 320, type: 'pingle' },
    { name: 'Kitten specialists', id: 321, type: 'pingle' },
    { name: 'Kitten experts', id: 322, type: 'pingle' },
    { name: 'Kitten consultants', id: 425, type: 'pingle' },
    {
        name: 'Kitten assistants to the regional manager',
        id: 442,
        type: 'pingle',
    },
    { name: 'Kitten marketeers', id: 462, type: 'pingle' },
    { name: 'Kitten analysts', id: 494, type: 'pingle' },
    { name: 'Kitten executives', id: 613, type: 'pingle' },
    { name: 'Kitten admins', id: 766, type: 'pingle' },
    { name: 'Kitten strategists', id: 865, type: 'pingle' },
] as const satisfies Array<Upgrade>;
