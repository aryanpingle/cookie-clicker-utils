export type BuildingIndex = number;

export type RunInfo = {
    ascensionStart: number;
    legacyStart: number;
    lastOpened: number;
    bakeryName: string;
    youAppearance: string;
    seed: string;
};

export type PreferencesInfo = {
    particles: boolean; // Show cookies falling down, etc.?
    numbers: boolean; // Show numbers that pop up when clicking the cookie?
    autoSave: boolean; // Should the game be saved automatically every 60 seconds? (This cannot be changed in the options menu.)
    autoUpdate: boolean; // Should the game automatically check for updates? If on, and a new update is available, a message will pop up asking to reload for the new update. (This cannot be changed in the options menu.)
    milk: boolean; // Show milk under big cookie?
    fancyGraphics: boolean; // Show fancy graphics?
    closingWarning: boolean; // Show the warning when closing the game tab?
    cursors: boolean; // Show your cursors around the big cookie?
    defocus: boolean; // Enable defocus to improve performance when window is out of focus?
    shortNumbers: boolean; // Display short numbers? If on, numbers will be displayed according to the short scale.
    fastNotes: boolean; // Should notifications disappear much faster?
    wobblyCookie: boolean; // Enable big cookie wobbling when clicked?
    altFont: boolean; // Show your cookies using alternative (monospace) font?
    CSSFilters: boolean; // Enable CSS filters?
    altCookieSound: boolean; // Enable alternative cookie sound when clicked?
    iconCrates: boolean; // Show crates around achievement and upgrade icons?
    backupWarning: boolean; // Show warning to back up your save when wiping?
    extraButtons: boolean; // Show the mute button on buildings?
    lumpConfirmation: boolean; // Show a confirmation popup when spending sugar lumps?
    customGrandmas: boolean; // Show custom grandma names from the Patreon? If off, only the default names will be used.
    sleepMode: boolean; // When the game starts lagging it will put itself into sleep mode and offline production will kick in
    enableCloudSaving: boolean; // Enables Steam cloud saving
    musicInBackground: boolean; // If 1 the music will continue to play even when the window isn't focused
    scaryStuffOff: boolean; // If 1 grandmapocalipse will use the unspooky sprites
    fullscreen: boolean; // Toggles between fullscreen and windowed
    screenReader: boolean; // Optimalizations for screen readers
    discordPresence: boolean; // TODO
};

export enum BuildingName {
    CURSOR = 'Cursor',
    GRANDMA = 'Grandma',
    FARM = 'Farm',
    MINE = 'Mine',
    FACTORY = 'Factory',
    BANK = 'Bank',
    TEMPLE = 'Temple',
    WIZARD_TOWER = 'Wizard Tower',
    SHIPMENT = 'Shipment',
    ALCHEMY_LAB = 'Alchemy Lab',
    PORTAL = 'Portal',
    TIME_MACHINE = 'Time Machine',
    ANTIMATTER_CONDENSER = 'Antimatter Condenser',
    PRISM = 'Prism',
    CHANCEMAKER = 'Chancemaker',
    FRACTAL_ENGINE = 'Fractal Engine',
    JAVASCRIPT_CONSOLE = 'Javascript Console',
    IDLEVERSE = 'Idleverse',
    CORTEX_BAKER = 'Cortex Baker',
    YOU = 'You',
}

export type BuildingInfo = {
    currentUnits: number;
    totalUnitsBought: number;
    lifetimeCookies: number;
    level: string;
    minigameData: string;
    muted: string;
    lifetimeMaxUnits: number;
};

export type MiscGameData = {
    cookies: number;
    totalCookiesEarned: number;
    cookieClicks: number;
    goldenCookieClicks_lifetime: number;
    cookiesMadeByClicking: number;
    goldenCookiesMissed: number;
    backgroundType: number;
    milkType: number;
    cookiesFromPastRuns: number;
    elderWrath: number;
    pledges: number;
    pledgeTimeLeft: number;
    currentlyResearching: number;
    researchTimeLeft: number;
    ascensions: number;
    goldenCookieClicks_thisRun: number;
    cookiesSuckedByWrinklers: number;
    wrinklersPopped: number;
    santaLevel: number;
    reindeerClicked: number;
    seasonTimeLeft: number;
    seasonSwitcherUses: number;
    currentSeason: string;
    amountOfCookiesContainedInWrinklers: number;
    numberOfWrinklers: number;
    prestigeLevel: number;
    heavenlyChips: number;
    heavenlyChipsSpent: number;
    heavenlyCookies: number;
    ascensionMode: number;
    permanentUpgrade1: number;
    permanentUpgrade2: number;
    permanentUpgrade3: number;
    permanentUpgrade4: number;
    permanentUpgrade5: number;
    dragonLevel: number;
    dragonAura: number;
    dragonAura2: number;
    chimeType: number;
    volume: number;
    numberOfShinyWrinklers: number;
    amountOfCookiesContainedInShinyWrinklers: number;
    currentAmountOfSugarLumps: number;
    totalAmountOfSugarLumpsMade: number;
    timeWhenCurrentSugarLumpStarted: number;
    timeWhenLastRefilledAMinigameWithASugarLump: number;
    sugarLumpType: number;
    vault: string;
    heralds: number;
    goldenCookieFortune: number;
    cpSFortune: number;
    highestRawCpS: number;
    musicVolume: number;
    cookiesSent: number;
    cookiesReceived: number;
};

// Ref: https://cookieclicker.fandom.com/wiki/Save#Save_format
export type ParsedSavefile = {
    version: string;
    run: RunInfo;
    preferences: PreferencesInfo;
    misc: MiscGameData;
    buildings: Array<BuildingInfo>;
    upgrades: number[];
    achievements: string;
    buffs: string;
};
