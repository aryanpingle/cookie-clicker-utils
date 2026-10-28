import { getBaseCost } from '../src/baseCost.js';
import {
    getNextUnitCost,
    NUM_BUILDINGS,
    NUM_UPGRADE_CHUNKS,
} from '../src/constants.js';
import { calculateCps } from '../src/cps/index.js';
import { addUpgrade, removeUpgrade } from '../src/upgrade.js';
import type { ParsedSavefile } from '../src/types.js';
import { parseSavefile } from './utils.js';
import { getFrontierUpgrades } from '../src/upgrades/unlocks/index.js';
import { timer } from '../src/timer.js';

const game = parseSavefile('default');

// --- Script-level Constants

const MAXTURNS = 100;
const MAXTIME = 20 * 60;

// --- Algorithm Constants

const BIT_FOR_BUILDING = 1;

const t = <TFunc extends (...args: any[]) => any>(func: TFunc) =>
    timer.withTimer(func);

const tempArrForUID = new Array(NUM_BUILDINGS + NUM_UPGRADE_CHUNKS);

type Entry = {
    path: number[];
    cps: number;
    time: number;
};

// --- Algorithm

timer.start();

// Path: B1,B2,U1,...
// UID: B1#2B2#1U1#1...

function generateUID(game: ParsedSavefile) {
    // Upgrades
    game.upgrades.forEach((chunk, index) => {
        tempArrForUID[index] = chunk;
    });

    // Buildings
    game.buildings.forEach((building, index) => {
        tempArrForUID[NUM_UPGRADE_CHUNKS + index] = building.currentUnits;
    });

    return JSON.stringify(tempArrForUID);
}

function applyPath(game: ParsedSavefile, path: number[]) {
    for (const buildingInfo of game.buildings) {
        buildingInfo.currentUnits = 0;
    }
    game.upgrades.forEach((_, i) => (game.upgrades[i] = 0));

    path.forEach((choice) => {
        const type = choice & 1;
        const idx = choice >> 1;
        if (type === BIT_FOR_BUILDING) {
            const buildingInfo = game.buildings[idx]!;
            buildingInfo.currentUnits++;
        } else {
            t(addUpgrade)(game, idx);
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

function generatePossibilities(game: ParsedSavefile, prevResult: Entry) {
    const currentCps = prevResult.cps;
    const elapsedTime = prevResult.time;
    const path = prevResult.path;

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
        path.push((buildingIdx << 1) + BIT_FOR_BUILDING);

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
    upgradesWithPrices.forEach(([upgradeIdx, cost]) => {
        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) return;

        t(addUpgrade)(game, upgradeIdx);
        path.push((upgradeIdx << 1) + (1 - BIT_FOR_BUILDING));

        const newCps = t(calculateCps)(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        t(tryAddingEntry)(game, result);

        removeUpgrade(game, upgradeIdx);
        path.pop();
    });
    timer.stop();
}

let oldResults: Record<string, Entry> = {
    '': {
        path: [],
        cps: t(calculateCps)(game),
        time: 0,
    },
};
let newResults: Record<string, Entry> = {};
const totalResults: Record<string, Entry> = {};

for (let turn = 1; turn <= MAXTURNS; ++turn) {
    for (const result of Object.values(oldResults)) {
        t(applyPath)(game, result.path);

        t(generatePossibilities)(game, result);
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
