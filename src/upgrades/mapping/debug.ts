import type { Upgrade } from '../types.js';

export const DebugUpgrades = [
    { name: 'Ultrascience', id: 79, type: 'pingle' },
    { name: 'Gold hoard', id: 83, type: 'pingle' },
    { name: 'Neuromancy', id: 91, type: 'pingle' },
    { name: 'Perfect idling', id: 124, type: 'pingle' },
    { name: 'Wrinkler doormat', id: 142, type: 'pingle' },
    { name: 'Reindeer season', id: 167, type: 'pingle' },
    { name: 'Eternal seasons', id: 186, type: 'pingle' },
    { name: 'Magic shenanigans', id: 208, type: 'pingle' },
    { name: 'Occult obstruction', id: 398, type: 'pingle' },
    { name: 'Glucose-charged air', id: 399, type: 'pingle' },
    { name: 'Turbo-charged soil', id: 459, type: 'pingle' },
    { name: 'A really good guide book', id: 644, type: 'pingle' },
    { name: 'Web cookies', id: 816, type: 'pingle' },
    { name: 'Steamed cookies', id: 817, type: 'pingle' },
] as const satisfies Array<Upgrade>;
