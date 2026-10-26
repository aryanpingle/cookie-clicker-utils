import { getBaseCost } from '../src/baseCost.js';
import { getNextUnitCost } from '../src/constants.js';
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

const MAXTURNS = 100;
const MAXTIME = 15 * 60;

const NO_UPGRADES = new Array(game.upgrades.length).fill('0').join('');

type Entry = {
    path: string[];
    cps: number;
    time: number;
};

// Path: B1,B2,U1,...
// UID: B1#2B2#1U1#1...

function _generateUID(choices: string[]) {
    const count: Record<string, number> = {};
    timer.start('uid1');
    choices.forEach((choice) => {
        if (!count[choice]) count[choice] = 0;
        count[choice]++;
    });
    timer.stop();

    timer.start('uid2');
    const uid = Object.entries(count)
        .map(([a, b]) => `${a}#${b}`)
        .sort()
        .join('');
    timer.stop();
    return uid;
}
const generateUID = timer.withTimer('generateUID', _generateUID);

function _applyPath(game: ParsedSavefile, choices: string[]) {
    for (const buildingInfo of game.buildings) {
        buildingInfo.currentUnits = 0;
    }
    game.upgrades = NO_UPGRADES;

    choices.forEach((choice) => {
        const type = choice[0];
        const idx = parseInt(choice.substring(1));
        if (type === 'B') {
            const buildingInfo = game.buildings[idx]!;
            buildingInfo.currentUnits++;
        } else {
            timer.start('addUpgradeByIndex');
            addUpgradeByIndex(game, idx);
            timer.stop();
        }
    });
}
const applyPath = timer.withTimer('applyPath', _applyPath);

function tryAddingEntry(entry: Entry) {
    const hash = generateUID(entry.path);
    if (Object.hasOwn(newResults, hash)) {
        const prevEntry = newResults[hash]!;
        if (prevEntry.time > entry.time) {
            newResults[hash] = { ...entry, path: [...entry.path] };
        } else {
            // noop
        }
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
    timer.start('Calculate current CPS');
    const currentCps = calculateCps(game, elapsedTime);
    timer.stop();

    // Consider each building
    timer.start('Consider each building');
    for (
        let buildingIdx = 0;
        buildingIdx < game.buildings.length;
        ++buildingIdx
    ) {
        const buildingInfo = game.buildings[buildingIdx]!;
        const baseCost = getBaseCost(buildingIdx);

        const cost = getNextUnitCost(baseCost, buildingInfo.currentUnits);

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) {
            continue;
        }

        // Purchase the building
        buildingInfo.currentUnits++;
        path.push(`B${buildingIdx}`);

        const newCps = calculateCps(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        tryAddingEntry(result);

        // Remove the building
        buildingInfo.currentUnits--;
        path.pop();
    }
    timer.stop();

    // Consider upgrades

    timer.start('getFrontierUpgrades');
    const upgradesWithPrices = getFrontierUpgrades(game);
    timer.stop();

    timer.start('Check all upgrades');
    upgradesWithPrices.forEach(([upgradeName, cost]) => {
        const upgradeIdx = AllUpgrades[upgradeName].id;

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) return;

        addUpgrade(game, upgradeName);
        path.push(`U${upgradeIdx}`);

        const newCps = calculateCps(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        tryAddingEntry(result);

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
        applyPath(game, result.path);

        timer.start('generatePossibilities');
        generatePossibilities(game, result.path, result.time);
        timer.stop();
    }

    Object.assign(totalResults, newResults);

    oldResults = newResults;
    newResults = {};
}
timer.stop();

const t = Object.values(totalResults);
t.sort((a, b) => a.time - b.time); // sort by time (secondary)
t.sort((a, b) => -(a.cps - b.cps)); // sort by cps (primary)
console.log(t.slice(0, 5));

timer.stop();
timer.print();
