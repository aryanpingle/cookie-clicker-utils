import type { Upgrade } from '../types.js';

export const ResearchUpgrades = [
    { name: 'Bingo center/Research facility', id: 64, type: 'pingle' },
    { name: 'Specialized chocolate chips', id: 65, type: 'pingle' },
    { name: 'Designer cocoa beans', id: 66, type: 'pingle' },
    { name: 'Ritual rolling pins', id: 67, type: 'pingle' },
    { name: 'Underworld ovens', id: 68, type: 'pingle' },
    { name: 'One mind', id: 69, type: 'pingle' },
    { name: 'Exotic nuts', id: 70, type: 'pingle' },
    { name: 'Communal brainsweep', id: 71, type: 'pingle' },
    { name: 'Arcane sugar', id: 72, type: 'pingle' },
    { name: 'Elder Pact', id: 73, type: 'pingle' },
    { name: 'Sacrificial rolling pins', id: 87, type: 'pingle' },
] as const satisfies Array<Upgrade>;
