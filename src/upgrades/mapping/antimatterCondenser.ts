import type { Upgrade } from '../types.js';

export const AntimatterCondenserUpgrades = [
    { name: 'Sugar bosons', id: 99, type: 'pingle' },
    { name: 'String theory', id: 100, type: 'pingle' },
    { name: 'Large macaron collider', id: 101, type: 'pingle' },
    { name: 'Big bang bake', id: 102, type: 'pingle' },
    { name: 'Reverse cyclotrons', id: 118, type: 'pingle' },
    { name: 'Nanocosmics', id: 200, type: 'pingle' },
    { name: 'The Pulse', id: 305, type: 'pingle' },
    {
        name: 'Some other super-tiny fundamental particle? Probably?',
        id: 318,
        type: 'pingle',
    },
    { name: 'Quantum comb', id: 439, type: 'pingle' },
    { name: 'Baking Nobel prize', id: 491, type: 'pingle' },
    { name: 'The definite molecule', id: 517, type: 'pingle' },
    { name: 'Flavor itself', id: 673, type: 'pingle' },
    { name: 'Delicious pull', id: 711, type: 'pingle' },
    { name: 'Employee minification', id: 754, type: 'pingle' },
    { name: 'Candied atoms', id: 851, type: 'pingle' },
] as const satisfies Array<Upgrade>;
