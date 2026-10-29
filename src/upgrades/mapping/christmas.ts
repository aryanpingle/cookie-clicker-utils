import type { Upgrade } from '../types.js';

export const ChristmasUpgrades = [
    { name: 'A festive hat', id: 152, type: 'pingle' },
    { name: 'Increased merriness', id: 153, type: 'pingle' },
    { name: 'Improved jolliness', id: 154, type: 'pingle' },
    { name: 'A lump of coal', id: 155, type: 'pingle' },
    { name: 'An itchy sweater', id: 156, type: 'pingle' },
    { name: 'Reindeer baking grounds', id: 157, type: 'pingle' },
    { name: 'Weighted sleighs', id: 158, type: 'pingle' },
    { name: 'Ho ho ho-flavored frosting', id: 159, type: 'pingle' },
    { name: 'Season savings', id: 160, type: 'pingle' },
    { name: 'Toy workshop', id: 161, type: 'pingle' },
    { name: 'Naughty list', id: 162, type: 'pingle' },
    { name: "Santa's bottomless bag", id: 163, type: 'pingle' },
    { name: "Santa's helpers", id: 164, type: 'pingle' },
    { name: "Santa's legacy", id: 165, type: 'pingle' },
    { name: "Santa's milk and cookies", id: 166, type: 'pingle' },
    { name: "Santa's dominion", id: 168, type: 'pingle' },
] as const satisfies Array<Upgrade>;
