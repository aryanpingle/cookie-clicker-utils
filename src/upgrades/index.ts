import { CursorUpgrades } from './mapping/cursor.js';
import { GrandmaUpgrades } from './mapping/grandma.js';
import { FarmUpgrades } from './mapping/farm.js';
import { MineUpgrades } from './mapping/mine.js';
import { FactoryUpgrades } from './mapping/factory.js';
import { BankUpgrades } from './mapping/bank.js';
import { TempleUpgrades } from './mapping/temple.js';
import { WizardTowerUpgrades } from './mapping/wizardTower.js';
import { ShipmentUpgrades } from './mapping/shipment.js';
import { AlchemyLabUpgrades } from './mapping/alchemyLab.js';
import { PortalUpgrades } from './mapping/portal.js';
import { TimeMachineUpgrades } from './mapping/timeMachine.js';
import { AntimatterCondenserUpgrades } from './mapping/antimatterCondenser.js';
import { PrismUpgrades } from './mapping/prism.js';
import { ChancemakerUpgrades } from './mapping/chancemaker.js';
import { FractalEngineUpgrades } from './mapping/fractalEngine.js';
import { JavascriptConsoleUpgrades } from './mapping/javascriptConsole.js';
import { IdleverseUpgrades } from './mapping/idleverse.js';
import { CortexBakerUpgrades } from './mapping/cortexBaker.js';
import { YouUpgrades } from './mapping/you.js';
import { KittenUpgrades } from './mapping/kitten.js';
import { GrandmaVariantUpgrades } from './mapping/grandmaVariant.js';
import { SynergyUpgrades } from './mapping/synergy.js';
import { ClickingUpgrades } from './mapping/clicking.js';
import { GoldenCookieUpgrades } from './mapping/goldenCookie.js';
import { HeavenlyChipUpgrades } from './mapping/heavenlyChip.js';
import { FortuneUpgrades } from './mapping/fortune.js';
import { DebugUpgrades } from './mapping/debug.js';
import { SwitchUpgrades } from './mapping/switch.js';
import { CookieUpgrades } from './mapping/cookie.js';
import { EasterUpgrades } from './mapping/easter.js';
import { ChristmasUpgrades } from './mapping/christmas.js';
import { ResearchUpgrades } from './mapping/research.js';
import { DragonUpgrades } from './mapping/dragon.js';
import { GardenUpgrades } from './mapping/garden.js';
import { MiscUpgrades } from './mapping/misc.js';
import { UnshackledBuildingUpgrades } from './mapping/unshackledBuilding.js';
import { UnshackledTierUpgrades } from './mapping/unshackledTier.js';
import { HeavenlyUpgrades } from './mapping/heavenly.js';
import type { Upgrade } from './types.js';

export const AllUpgrades: Array<Upgrade> = (
    [
        // Buildings (tiered)
        CursorUpgrades,
        GrandmaUpgrades,
        FarmUpgrades,
        MineUpgrades,
        FactoryUpgrades,
        BankUpgrades,
        TempleUpgrades,
        WizardTowerUpgrades,
        ShipmentUpgrades,
        AlchemyLabUpgrades,
        PortalUpgrades,
        TimeMachineUpgrades,
        AntimatterCondenserUpgrades,
        PrismUpgrades,
        ChancemakerUpgrades,
        FractalEngineUpgrades,
        JavascriptConsoleUpgrades,
        IdleverseUpgrades,
        CortexBakerUpgrades,
        YouUpgrades,

        // Other groups
        KittenUpgrades,
        GrandmaVariantUpgrades,
        SynergyUpgrades,
        ClickingUpgrades,
        GoldenCookieUpgrades,
        HeavenlyChipUpgrades,
        FortuneUpgrades,
        DebugUpgrades,
        SwitchUpgrades,
        CookieUpgrades,
        EasterUpgrades,
        ChristmasUpgrades,
        ResearchUpgrades,
        DragonUpgrades,
        GardenUpgrades,
        MiscUpgrades,
        UnshackledBuildingUpgrades,
        UnshackledTierUpgrades,
        HeavenlyUpgrades,
    ] as Array<Record<string, Upgrade>>
)
    .map((obj) => Object.values(obj))
    .flat()
    .sort((a, b) => a.id - b.id);
