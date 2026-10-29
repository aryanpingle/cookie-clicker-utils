import type { Upgrade } from '../types.js';

export const ChancemakerUpgrades = [
    { name: 'Your lucky cookie', id: 416, type: 'pingle' },
    { name: '"All Bets Are Off" magic coin', id: 417, type: 'pingle' },
    { name: 'Winning lottery ticket', id: 418, type: 'pingle' },
    { name: 'Four-leaf clover field', id: 419, type: 'pingle' },
    { name: 'A recipe book about books', id: 420, type: 'pingle' },
    { name: 'Leprechaun village', id: 421, type: 'pingle' },
    { name: 'Improbability drive', id: 422, type: 'pingle' },
    { name: 'Antisuperstistronics', id: 423, type: 'pingle' },
    { name: 'Bunnypedes', id: 441, type: 'pingle' },
    { name: 'Revised probabilistics', id: 493, type: 'pingle' },
    { name: '0-sided dice', id: 519, type: 'pingle' },
    { name: 'A touch of determinism', id: 675, type: 'pingle' },
    { name: 'On a streak', id: 713, type: 'pingle' },
    { name: 'Silver lining maximization', id: 756, type: 'pingle' },
    { name: "Gambler's fallacy fallacy", id: 853, type: 'pingle' },
] as const satisfies Array<Upgrade>;
