import type { Upgrade } from '../types.js';

export const PrismUpgrades = [
    { name: 'Gem polish', id: 175, type: 'pingle' },
    { name: '9th color', id: 176, type: 'pingle' },
    { name: 'Chocolate light', id: 177, type: 'pingle' },
    { name: 'Grainbow', id: 178, type: 'pingle' },
    { name: 'Pure cosmic light', id: 179, type: 'pingle' },
    { name: 'Glow-in-the-dark', id: 201, type: 'pingle' },
    { name: 'Lux sanctorum', id: 306, type: 'pingle' },
    { name: 'Reverse shadows', id: 319, type: 'pingle' },
    { name: 'Crystal mirrors', id: 440, type: 'pingle' },
    { name: 'Reverse theory of light', id: 492, type: 'pingle' },
    { name: 'Light capture measures', id: 518, type: 'pingle' },
    { name: 'Light speed limit', id: 674, type: 'pingle' },
    { name: "Occam's laser", id: 712, type: 'pingle' },
    { name: 'Hyperblack paint', id: 755, type: 'pingle' },
    { name: 'Lab goggles but like cool shades', id: 852, type: 'pingle' },
] as const satisfies Array<Upgrade>;
