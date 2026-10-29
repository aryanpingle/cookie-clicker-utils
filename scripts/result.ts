import c from 'chalk';
import type { ParsedSavefile } from '../src/types.js';
import { AllUpgrades } from '../src/upgrades/index.js';
import { BUILDING_NAMES, getNextUnitCost } from '../src/constants.js';
import { calculateCps } from '../src/cps/index.js';
import { getFrontierUpgrades } from '../src/upgrades/unlocks/index.js';
import { getBaseCost } from '../src/baseCost.js';
import { addUpgrade } from '../src/upgrade.js';

function choiceType(choice: number): 'building' | 'upgrade' {
    return choice & 1 ? 'building' : 'upgrade';
}

export function printSteps(game: ParsedSavefile, path: Array<number>) {
    let currentCps = calculateCps(game);
    console.log(`Starting CPS: ${currentCps}`);

    let elapsedTime = 0;
    for (const choice of path) {
        const type = choiceType(choice);
        const val = choice >> 1;

        if (type === 'upgrade') {
            const upgradeId = val;
            const upgrade = AllUpgrades[upgradeId]!;

            const upgradeFrontier = getFrontierUpgrades(game);

            const upgradeCost = upgradeFrontier.find(
                (upgradeWithCost) => upgradeWithCost[0] === upgradeId,
            )![1];

            const time = upgradeCost / currentCps;
            const readableTime = `${Math.ceil(time)}s`;

            addUpgrade(game, upgradeId);
            elapsedTime += time;

            currentCps = calculateCps(game, elapsedTime);

            console.log(
                `After ${c.green(readableTime)}: Upgrade ${c.yellow(upgrade.name)} (${c.bold(currentCps)} cookies per second)`,
            );
        } else if (type === 'building') {
            const buildingId = val;
            const buildingName = BUILDING_NAMES[buildingId]!;
            const buildingInfo = game.buildings[buildingId]!;

            const buildingCost = getNextUnitCost(
                getBaseCost(buildingId),
                buildingInfo.currentUnits,
            );

            const time = buildingCost / currentCps;
            const readableTime = `${Math.ceil(time)}s`;

            buildingInfo.currentUnits++;
            elapsedTime += time;

            currentCps = calculateCps(game, elapsedTime);

            console.log(
                `After ${c.green(readableTime)}: Buy ${c.blue(buildingName)} - total ${c.blue(buildingInfo.currentUnits)} (${c.bold(currentCps)} cookies per second)`,
            );
        }
    }
}
