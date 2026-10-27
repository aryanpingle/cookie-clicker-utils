import { getBaseCost } from '../src/baseCost.js';
import {
    getNextUnitCost,
    NUM_BUILDINGS,
    NUM_UPGRADE_CHUNKS,
} from '../src/constants.js';
import { calculateCps } from '../src/cps/index.js';
import {
    addUpgrade,
    addUpgradeByIndex,
    removeUpgrade,
} from '../src/upgrade.js';
import type { ParsedSavefile } from '../src/types.js';
import { parseSavefile } from './utils.js';
import { getFrontierUpgrades } from '../src/upgrades/unlocks/index.js';
import { AllUpgrades } from '../src/upgrades/index.js';
import { Timer } from './timer.js';

const game = parseSavefile('default');

const timer = new Timer();
timer.start();

let t = <TFunc extends (...args: any[]) => any>(func: TFunc) =>
    timer.withTimer(func);

const MAXTURNS = 100;
const MAXTIME = 18 * 60;

type Entry = {
    path: string[];
    cps: number;
    time: number;
};

// Path: B1,B2,U1,...
// UID: B1#2B2#1U1#1...

function generateUID(game: ParsedSavefile) {
    let arr = new Array(NUM_BUILDINGS + NUM_UPGRADE_CHUNKS);

    // Upgrades
    game.upgrades.forEach((chunk, index) => {
        arr[index] = chunk;
    });

    // Buildings
    game.buildings.forEach((building, index) => {
        arr[NUM_UPGRADE_CHUNKS + index] = building.currentUnits;
    });

    return arr.map(String).join(';');
}

function applyPath(game: ParsedSavefile, choices: string[]) {
    for (const buildingInfo of game.buildings) {
        buildingInfo.currentUnits = 0;
    }
    game.upgrades.forEach((_, i) => (game.upgrades[i] = 0));

    choices.forEach((choice) => {
        const type = choice[0];
        const idx = parseInt(choice.substring(1));
        if (type === 'B') {
            const buildingInfo = game.buildings[idx]!;
            buildingInfo.currentUnits++;
        } else {
            t(addUpgradeByIndex)(game, idx);
        }
    });
}

function tryAddingEntry(game: ParsedSavefile, entry: Entry) {
    const hash = t(generateUID)(game);
    if (Object.hasOwn(newResults, hash)) {
        timer.start('try replacing entry');
        const prevEntry = newResults[hash]!;
        if (prevEntry.time > entry.time) {
            newResults[hash] = { ...entry, path: [...entry.path] };
        } else {
            // noop
        }
        timer.stop();
    } else {
        newResults[hash] = { ...entry, path: [...entry.path] };
    }
}

function generatePossibilities(
    game: ParsedSavefile,
    path: string[],
    elapsedTime: number,
) {
    // Assume that the start is valid. Only consideration should be while generating a new possibility.
    const currentCps = t(calculateCps)(game, elapsedTime);

    // Consider each building
    timer.start('Consider each building');
    for (
        let buildingIdx = 0;
        buildingIdx < game.buildings.length;
        ++buildingIdx
    ) {
        const buildingInfo = game.buildings[buildingIdx]!;
        const baseCost = t(getBaseCost)(buildingIdx);

        const cost = t(getNextUnitCost)(baseCost, buildingInfo.currentUnits);

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) continue;

        // Purchase the building
        buildingInfo.currentUnits++;
        path.push(`B${buildingIdx}`);

        const newCps = t(calculateCps)(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        t(tryAddingEntry)(game, result);

        // Remove the building
        buildingInfo.currentUnits--;
        path.pop();
    }
    timer.stop();

    // Consider upgrades

    const upgradesWithPrices = t(getFrontierUpgrades)(game);

    timer.start('Check all upgrades');
    upgradesWithPrices.forEach(([upgradeName, cost]) => {
        const upgradeIdx = AllUpgrades[upgradeName].id;

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) return;

        t(addUpgrade)(game, upgradeName);
        path.push(`U${upgradeIdx}`);

        const newCps = t(calculateCps)(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        tryAddingEntry(game, result);

        removeUpgrade(game, upgradeName);
        path.pop();
    });
    timer.stop();
}

let oldResults: Record<string, Entry> = {
    '': {
        path: [],
        cps: calculateCps(game),
        time: 0,
    },
};
let newResults: Record<string, Entry> = {};
const totalResults: Record<string, Entry> = {};

for (let turn = 1; turn <= MAXTURNS; ++turn) {
    for (const result of Object.values(oldResults)) {
        t(applyPath)(game, result.path);

        t(generatePossibilities)(game, result.path, result.time);
    }

    Object.assign(totalResults, newResults);

    oldResults = newResults;
    newResults = {};
}

timer.start('Print results');
const h = Object.values(totalResults);
h.sort((a, b) => a.time - b.time); // sort by time (secondary)
h.sort((a, b) => -(a.cps - b.cps)); // sort by cps (primary)
console.log(h.slice(0, 5));
timer.stop();

timer.stop();
timer.print('.tmp/timing.txt');
