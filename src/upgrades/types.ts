type TieredUpgrade = {
    id: number;
    name: string;
    type: 'TieredUpgrade';
    qty: number;
    price: number;
};

export type GrandmaVariantUpgrade = {
    id: number;
    name: string;
    type: 'GrandmaVariant';
    price: number;
    relatedBuilding: number;
};

type BasicUpgrade = {
    id: number;
    name: string;
    type: 'pingle';
};

export type Upgrade = TieredUpgrade | BasicUpgrade | GrandmaVariantUpgrade;
