type TieredUpgrade = {
    id: number;
    type: 'TieredUpgrade';
    qty: number;
    price: number;
};

export type GrandmaVariantUpgrade = {
    id: number;
    type: 'GrandmaVariant';
    price: number;
    relatedBuilding: number;
};

type BasicUpgrade = {
    id: number;
    type: 'pingle';
};

export type Upgrade = TieredUpgrade | BasicUpgrade | GrandmaVariantUpgrade;
