import type { Upgrade } from '../types.js';

export const SynergyUpgrades = [
    // Synergies Vol. I
    { name: 'Future almanacs', id: 369, type: 'pingle' }, // Farm + Time machine
    { name: 'Seismic magic', id: 371, type: 'pingle' }, // Mine + Wizard tower
    { name: 'Quantum electronics', id: 373, type: 'pingle' }, // Factory + Antimatter condenser
    { name: 'Contracts from beyond', id: 375, type: 'pingle' }, // Bank + Portal
    { name: 'Paganism', id: 377, type: 'pingle' }, // Temple + Portal
    { name: 'Arcane knowledge', id: 379, type: 'pingle' }, // Wizard tower + Alchemy lab
    { name: 'Fossil fuels', id: 381, type: 'pingle' }, // Shipment + Mine
    { name: 'Primordial ores', id: 383, type: 'pingle' }, // Alchemy lab + Mine
    { name: 'Infernal crops', id: 385, type: 'pingle' }, // Portal + Farm
    { name: 'Relativistic parsec-skipping', id: 387, type: 'pingle' }, // Time machine + Shipment
    { name: 'Extra physics funding', id: 389, type: 'pingle' }, // Antimatter condenser + Bank
    { name: 'Light magic', id: 391, type: 'pingle' }, // Prism + Wizard tower
    { name: 'Gemmed talismans', id: 424, type: 'pingle' }, // Chancemaker + Mine
    { name: 'Recursive mirrors', id: 533, type: 'pingle' }, // Fractal engine + Prism
    { name: 'Script grannies', id: 605, type: 'pingle' }, // Javascript console + Grandma
    { name: 'Perforated mille-feuille cosmos', id: 696, type: 'pingle' }, // Idleverse + Portal
    { name: 'Thoughts & prayers', id: 761, type: 'pingle' }, // Cortex baker + Temple
    { name: 'Accelerated development', id: 859, type: 'pingle' }, // You + Time machine

    // Synergies Vol. II
    { name: 'Rain prayer', id: 370, type: 'pingle' }, // Farm + Temple
    { name: 'Asteroid mining', id: 372, type: 'pingle' }, // Mine + Shipment
    { name: 'Temporal overclocking', id: 374, type: 'pingle' }, // Factory + Time machine
    { name: 'Printing presses', id: 376, type: 'pingle' }, // Bank + Factory
    { name: 'God particle', id: 378, type: 'pingle' }, // Temple + Antimatter condenser
    { name: 'Magical botany', id: 380, type: 'pingle' }, // Wizard tower + Farm
    { name: 'Shipyards', id: 382, type: 'pingle' }, // Shipment + Factory
    { name: 'Gold fund', id: 384, type: 'pingle' }, // Alchemy lab + Bank
    { name: 'Abysmal glimmer', id: 386, type: 'pingle' }, // Portal + Prism
    { name: 'Primeval glow', id: 388, type: 'pingle' }, // Time machine + Prism
    { name: 'Chemical proficiency', id: 390, type: 'pingle' }, // Antimatter condenser + Alchemy lab
    { name: 'Mystical energies', id: 392, type: 'pingle' }, // Prism + Temple
    { name: 'Charm quarks', id: 443, type: 'pingle' }, // Chancemaker + Antimatter condenser
    { name: 'Mice clicking mice', id: 534, type: 'pingle' }, // Fractal engine + Cursor
    { name: 'Tombola computing', id: 606, type: 'pingle' }, // Javascript console + Chancemaker
    { name: 'Infraverses and superverses', id: 697, type: 'pingle' }, // Idleverse + Fractal engine
    { name: 'Fertile minds', id: 762, type: 'pingle' }, // Cortex baker + Farm
    { name: 'Peer review', id: 860, type: 'pingle' }, // You + Javascript console
] as const satisfies Array<Upgrade>;
