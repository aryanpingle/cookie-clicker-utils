import { n } from '../../number.js';
import type { Upgrade } from '../types.js';

export const FarmUpgrades = {
    'Cheap hoes': {
        id: 10,
        type: 'TieredUpgrade',
        price: n(11, 'thousand'),
        qty: 1,
    },
    'Fertilizer': {
        id: 11,
        type: 'TieredUpgrade',
        price: n(55, 'thousand'),
        qty: 5,
    },
    'Cookie trees': {
        id: 12,
        type: 'TieredUpgrade',
        price: n(550, 'thousand'),
        qty: 25,
    },
    'Genetically-modified cookies': {
        id: 45,
        type: 'TieredUpgrade',
        price: n(55, 'million'),
        qty: 50,
    },
    'Gingerbread scarecrows': {
        id: 111,
        type: 'TieredUpgrade',
        price: n(5.5, 'billion'),
        qty: 100,
    },
    'Pulsar sprinklers': {
        id: 193,
        type: 'TieredUpgrade',
        price: n(550, 'billion'),
        qty: 150,
    },
    'Fudge fungus': {
        id: 295,
        type: 'TieredUpgrade',
        price: n(550, 'trillion'),
        qty: 200,
    },
    'Wheat triffids': {
        id: 308,
        type: 'TieredUpgrade',
        price: n(550, 'quadrillion'),
        qty: 250,
    },
    'Humane pesticides': {
        id: 429,
        type: 'TieredUpgrade',
        price: n(550, 'quintillion'),
        qty: 300,
    },
    'Barnstars': {
        id: 481,
        type: 'TieredUpgrade',
        price: n(550, 'sextillion'),
        qty: 350,
    },
    'Lindworms': {
        id: 507,
        type: 'TieredUpgrade',
        price: n(5.5, 'octillion'),
        qty: 400,
    },
    'Global seed vault': {
        id: 663,
        type: 'TieredUpgrade',
        price: n(55, 'nonillion'),
        qty: 450,
    },
    'Reverse-veganism': {
        id: 701,
        type: 'TieredUpgrade',
        price: n(550, 'decillion'),
        qty: 500,
    },
    'Cookie mulch': {
        id: 744,
        type: 'TieredUpgrade',
        price: n(5.5, 'duodecillion'),
        qty: 550,
    },
    'Self-driving tractors': {
        id: 841,
        type: 'TieredUpgrade',
        price: n(55, 'tredecillion'),
        qty: 600,
    },
} as const satisfies Record<string, Upgrade>;
