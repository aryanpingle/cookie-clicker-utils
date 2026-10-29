import type { Upgrade } from '../types.js';

export const MineUpgrades = [
    { name: 'Sugar gas', id: 16, type: 'pingle' },
    { name: 'Megadrill', id: 17, type: 'pingle' },
    { name: 'Ultradrill', id: 18, type: 'pingle' },
    { name: 'Ultimadrill', id: 47, type: 'pingle' },
    { name: 'H-bomb mining', id: 113, type: 'pingle' },
    { name: 'Coreforge', id: 195, type: 'pingle' },
    { name: 'Planetsplitters', id: 296, type: 'pingle' },
    { name: 'Canola oil wells', id: 309, type: 'pingle' },
    { name: 'Mole people', id: 430, type: 'pingle' },
    { name: 'Mine canaries', id: 482, type: 'pingle' },
    { name: 'Bore again', id: 508, type: 'pingle' },
    { name: 'Air mining', id: 664, type: 'pingle' },
    { name: 'Caramel alloys', id: 702, type: 'pingle' },
    { name: 'Delicious mineralogy', id: 745, type: 'pingle' },
    { name: 'Mineshaft supports', id: 842, type: 'pingle' },
] as const satisfies Array<Upgrade>;
