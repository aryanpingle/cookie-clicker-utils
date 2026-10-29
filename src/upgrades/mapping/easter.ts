import type { Upgrade } from '../types.js';

export const EasterUpgrades = [
    { name: 'Chicken egg', id: 210, type: 'pingle' },
    { name: 'Duck egg', id: 211, type: 'pingle' },
    { name: 'Turkey egg', id: 212, type: 'pingle' },
    { name: 'Quail egg', id: 213, type: 'pingle' },
    { name: 'Robin egg', id: 214, type: 'pingle' },
    { name: 'Ostrich egg', id: 215, type: 'pingle' },
    { name: 'Cassowary egg', id: 216, type: 'pingle' },
    { name: 'Salmon roe', id: 217, type: 'pingle' },
    { name: 'Frogspawn', id: 218, type: 'pingle' },
    { name: 'Shark egg', id: 219, type: 'pingle' },
    { name: 'Turtle egg', id: 220, type: 'pingle' },
    { name: 'Ant larva', id: 221, type: 'pingle' },
    { name: 'Golden goose egg', id: 222, type: 'pingle' },
    { name: 'Faberge egg', id: 223, type: 'pingle' },
    { name: 'Wrinklerspawn', id: 224, type: 'pingle' },
    { name: 'Cookie egg', id: 225, type: 'pingle' },
    { name: 'Omelette', id: 226, type: 'pingle' },
    { name: 'Chocolate egg', id: 227, type: 'pingle' },
    { name: 'Century egg', id: 228, type: 'pingle' },
    { name: '"egg"', id: 229, type: 'pingle' },
] as const satisfies Array<Upgrade>;
