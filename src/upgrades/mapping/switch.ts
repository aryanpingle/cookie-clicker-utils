import type { Upgrade } from '../types.js';

export const SwitchUpgrades = [
    { name: 'Elder Pledge', id: 74, type: 'pingle' },
    { name: 'Elder Covenant', id: 84, type: 'pingle' },
    { name: 'Revoke Elder Covenant', id: 85, type: 'pingle' },
    { name: 'Festive biscuit', id: 182, type: 'pingle' },
    { name: 'Ghostly biscuit', id: 183, type: 'pingle' },
    { name: 'Lovesick biscuit', id: 184, type: 'pingle' },
    { name: "Fool's biscuit", id: 185, type: 'pingle' },
    { name: 'Bunny biscuit', id: 209, type: 'pingle' },
    { name: 'Golden switch [off]', id: 331, type: 'pingle' },
    { name: 'Golden switch [on]', id: 332, type: 'pingle' },
    { name: 'Milk selector', id: 333, type: 'pingle' },
    { name: 'Golden cookie sound selector', id: 361, type: 'pingle' },
    { name: 'Background selector', id: 414, type: 'pingle' },
    { name: 'Sugar frenzy', id: 452, type: 'pingle' },
    { name: 'Shimmering veil [off]', id: 563, type: 'pingle' },
    { name: 'Shimmering veil [on]', id: 564, type: 'pingle' },
    { name: 'Jukebox', id: 806, type: 'pingle' },
] as const satisfies Array<Upgrade>;
