import type { Upgrade } from "../types.js";

export const BankUpgrades = [
    { name: 'Taller tellers', id: 232, type: 'pingle' },
    { name: 'Scissor-resistant credit cards', id: 233, type: 'pingle' },
    { name: 'Acid-proof vaults', id: 234, type: 'pingle' },
    { name: 'Chocolate coins', id: 235, type: 'pingle' },
    { name: 'Exponential interest rates', id: 236, type: 'pingle' },
    { name: 'Financial zen', id: 237, type: 'pingle' },
    { name: 'Way of the wallet', id: 298, type: 'pingle' },
    { name: 'The stuff rationale', id: 311, type: 'pingle' },
    { name: 'Edible money', id: 432, type: 'pingle' },
    { name: 'Grand supercycles', id: 484, type: 'pingle' },
    { name: 'Rules of acquisition', id: 510, type: 'pingle' },
    { name: 'Altruistic loop', id: 666, type: 'pingle' },
    { name: 'Diminishing tax returns', id: 704, type: 'pingle' },
    { name: 'Cookie Points', id: 747, type: 'pingle' },
    { name: 'The big shortcake', id: 844, type: 'pingle' },
] as const satisfies Array<Upgrade>;
