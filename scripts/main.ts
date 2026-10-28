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

const NUM_EPOCHS = 1;

const PER_EPOCH_TURNS = 100;

const PER_EPOCH_TIME = 20 * 60;

const PER_EPOCH_BEST_N = -1;

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

function tryAddingEntry(
    nextTurnResults: Record<string, Entry>,
    game: ParsedSavefile,
    entry: Entry,
) {
    const hash = t(generateUID)(game);
    if (Object.hasOwn(nextTurnResults, hash)) {
        timer.start('try replacing entry');
        const prevEntry = nextTurnResults[hash]!;
        if (prevEntry.time > entry.time) {
            nextTurnResults[hash] = { ...entry, path: [...entry.path] };
        } else {
            // noop
        }
        timer.stop();
    } else {
        nextTurnResults[hash] = { ...entry, path: [...entry.path] };
    }
}

function generatePossibilities(
    game: ParsedSavefile,
    baseEntry: Entry,
    turnResults: Record<string, Entry>,
    TIME_LIMIT: number,
) {
    const currentCps = baseEntry.cps;
    const elapsedTime = baseEntry.time;
    const path = baseEntry.path;

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
        if (elapsedTime + timeInSeconds > TIME_LIMIT) continue;

        // Purchase the building
        buildingInfo.currentUnits++;
        path.push((buildingIdx << 1) + BIT_FOR_BUILDING);

        const newCps = t(calculateCps)(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        t(tryAddingEntry)(turnResults, game, result);

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
        if (elapsedTime + timeInSeconds > TIME_LIMIT) return;

        t(addUpgrade)(game, upgradeIdx);
        path.push((upgradeIdx << 1) + (1 - BIT_FOR_BUILDING));

        const newCps = t(calculateCps)(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        t(tryAddingEntry)(turnResults, game, result);

        removeUpgrade(game, upgradeIdx);
        path.pop();
    });
    timer.stop();
}

// Every turn starts with 1 or more starting entries.
// For all of the starting entries we generate X = all possibilities arising
// from the entry over 1 <= turns <= N.
// Return the top K results from X.
function runEpoch(startingEntries: Array<Entry>, TIME_LIMIT: number) {
    // TODO: Among the top K, there should be no results that are a subset of
    // other results. Example: having [..., B0] and [..., B0, B1] is pointless,
    // just take the latter. Give up the former for another option that offers
    // more variation in the next epoch.
    let epochResults: Array<Entry> = [...startingEntries];

    let fromIdx = 0;
    for (let turn = 1; turn <= PER_EPOCH_TURNS; ++turn) {
        console.log(`>> Running turn: #${turn}`);

        const currentTurnResults: Record<string, Entry> = {};

        for (let j = fromIdx; j < epochResults.length; ++j) {
            const baseEntry = epochResults[j]!;
            t(applyPath)(game, baseEntry.path);
            t(generatePossibilities)(
                game,
                baseEntry,
                currentTurnResults,
                TIME_LIMIT,
            );
        }

        const results = Object.values(currentTurnResults);

        epochResults = epochResults.concat(results);
        fromIdx = epochResults.length - results.length;
    }
    console.log('');

    // Throw away the initial entries
    epochResults = epochResults.slice(startingEntries.length);

    return epochResults;
}

function runAllEpochs(initialEntry: Entry) {
    let results: Array<Entry> = [];

    let startingEntries = [initialEntry];
    for (let epoch = 1; epoch <= NUM_EPOCHS; epoch++) {
        console.log(`> Running epoch: #${epoch}`, '\n');

        results = t(runEpoch)(startingEntries, PER_EPOCH_TIME * epoch);

        timer.start('Sort results by CPS + time');
        // sort by time (secondary)
        results.sort((entryA, entryB) => entryA.time - entryB.time);
        // sort by cps (primary)
        results.sort((entryA, entryB) => -(entryA.cps - entryB.cps));
        timer.stop();

        // If it's not the last epoch, cull the results
        if (epoch !== NUM_EPOCHS && PER_EPOCH_BEST_N !== -1) {
            results = results.slice(0, PER_EPOCH_BEST_N);
        }

        startingEntries = results;
    }

    return results;
}

let initialEntry: Entry = {
    path: [],
    cps: t(calculateCps)(game),
    time: 0,
};

const results = t(runAllEpochs)(initialEntry);

timer.start('Print results');
console.log(results.slice(0, 5));
timer.stop();

timer.stop();
timer.print('.tmp/timing.txt');
