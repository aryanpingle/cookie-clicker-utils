import type { Upgrade } from '../types.js';

export const PortalUpgrades = [
    { name: 'Ancient tablet', id: 25, type: 'pingle' },
    { name: 'Insane oatling workers', id: 26, type: 'pingle' },
    { name: 'Soul bond', id: 27, type: 'pingle' },
    { name: 'Sanity dance', id: 50, type: 'pingle' },
    { name: 'Brane transplant', id: 116, type: 'pingle' },
    { name: 'Deity-sized portals', id: 198, type: 'pingle' },
    { name: 'End of times back-up plan', id: 303, type: 'pingle' },
    { name: 'Maddening chants', id: 316, type: 'pingle' },
    { name: 'The real world', id: 437, type: 'pingle' },
    { name: 'Dimensional garbage gulper', id: 489, type: 'pingle' },
    { name: 'Embedded microportals', id: 515, type: 'pingle' },
    { name: 'His advent', id: 671, type: 'pingle' },
    { name: 'Domestic rifts', id: 709, type: 'pingle' },
    { name: 'Portal guns', id: 752, type: 'pingle' },
    { name: 'A way home', id: 849, type: 'pingle' },
] as const satisfies Array<Upgrade>;
