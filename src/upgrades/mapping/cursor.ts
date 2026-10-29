import { n } from '../../number.js';
import type { Upgrade } from '../types.js';

export const CursorUpgrades = [
    {
        name: 'Reinforced index finger',
        id: 0,
        type: 'TieredUpgrade',
        price: 100,
        qty: 1,
    },
    {
        name: 'Carpal tunnel prevention cream',
        id: 1,
        type: 'TieredUpgrade',
        price: 500,
        qty: 1,
    },
    {
        name: 'Ambidextrous',
        id: 2,
        type: 'TieredUpgrade',
        price: n(10, 'thousand'),
        qty: 10,
    },

    {
        name: 'Thousand fingers',
        id: 3,
        type: 'TieredUpgrade',
        price: n(100, 'thousand'),
        qty: 25,
    },

    {
        name: 'Million fingers',
        id: 4,
        type: 'TieredUpgrade',
        price: n(10, 'million'),
        qty: 50,
    },
    {
        name: 'Billion fingers',
        id: 5,
        type: 'TieredUpgrade',
        price: n(100, 'million'),
        qty: 100,
    },
    {
        name: 'Trillion fingers',
        id: 6,
        type: 'TieredUpgrade',
        price: n(1, 'billion'),
        qty: 150,
    },
    {
        name: 'Quadrillion fingers',
        id: 43,
        type: 'TieredUpgrade',
        price: n(10, 'billion'),
        qty: 200,
    },
    {
        name: 'Quintillion fingers',
        id: 82,
        type: 'TieredUpgrade',
        price: n(10, 'trillion'),
        qty: 250,
    },
    {
        name: 'Sextillion fingers',
        id: 109,
        type: 'TieredUpgrade',
        price: n(10, 'quadrillion'),
        qty: 300,
    },
    {
        name: 'Septillion fingers',
        id: 188,
        type: 'TieredUpgrade',
        price: n(10, 'quintillion'),
        qty: 350,
    },
    {
        name: 'Octillion fingers',
        id: 189,
        type: 'TieredUpgrade',
        price: n(10, 'sextillion'),
        qty: 400,
    },
    {
        name: 'Nonillion fingers',
        id: 660,
        type: 'TieredUpgrade',
        price: n(10, 'septillion'),
        qty: 450,
    },
    {
        name: 'Decillion fingers',
        id: 764,
        type: 'TieredUpgrade',
        price: n(10, 'octillion'),
        qty: 500,
    },
    {
        name: 'Undecillion fingers',
        id: 873,
        type: 'TieredUpgrade',
        price: n(10, 'nonillion'),
        qty: 550,
    },
] as const satisfies Array<Upgrade>;
