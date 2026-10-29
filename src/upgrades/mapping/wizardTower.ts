import type { Upgrade } from '../types.js';

export const WizardTowerUpgrades = [
    { name: 'Pointier hats', id: 244, type: 'pingle' },
    { name: 'Beardlier beards', id: 245, type: 'pingle' },
    { name: 'Ancient grimoires', id: 246, type: 'pingle' },
    { name: 'Kitchen curses', id: 247, type: 'pingle' },
    { name: 'School of sorcery', id: 248, type: 'pingle' },
    { name: 'Dark formulas', id: 249, type: 'pingle' },
    { name: 'Cookiemancy', id: 300, type: 'pingle' },
    { name: 'Rabbit trick', id: 313, type: 'pingle' },
    { name: 'Deluxe tailored wands', id: 434, type: 'pingle' },
    { name: 'Immobile spellcasting', id: 486, type: 'pingle' },
    { name: 'Electricity', id: 512, type: 'pingle' },
    { name: 'Spelling bees', id: 668, type: 'pingle' },
    { name: 'Wizard basements', id: 706, type: 'pingle' },
    { name: 'Magical realism', id: 749, type: 'pingle' },
    { name: 'Polymorphism', id: 846, type: 'pingle' },
] as const satisfies Array<Upgrade>;
