import type { ParsedSavefile } from '../types.js';
import { parseBuildings, serializeBuildings } from './buildings.js';
import { parseMisc, serializeMisc } from './misc.js';
import { parsePreferences, serializePreferences } from './preferences.js';
import { parseRunData, serializeRunData } from './run.js';
import { parseUpgradestring, serializeUpgrades } from './upgrades.js';

export function parseDecodedSavestring(decodedSavestring: string) {
    const pipes = decodedSavestring.split('|');

    const version = pipes[0]!;

    // const future = pipes[1]!;

    const run = parseRunData(pipes[2]!);

    const preferences = parsePreferences(pipes[3]!);

    const misc = parseMisc(pipes[4]!);

    const buildings = parseBuildings(pipes[5]!);

    const upgrades = parseUpgradestring(pipes[6]!);

    const achievements = pipes[7]!;
    const buffs = pipes[8]!;

    const parsedData: ParsedSavefile = {
        version,
        run,
        preferences,
        misc,
        buildings,
        upgrades,
        achievements,
        buffs,
    };

    return parsedData;
}

export function serializeParsedSavestring(parsedData: ParsedSavefile): string {
    const pipes = [
        parsedData.version,
        '', // future
        serializeRunData(parsedData.run),
        serializePreferences(parsedData.preferences),
        serializeMisc(parsedData.misc),
        serializeBuildings(parsedData.buildings),
        serializeUpgrades(parsedData.upgrades),
        parsedData.achievements,
        parsedData.buffs,
        '',
    ];

    return pipes.join('|');
}
