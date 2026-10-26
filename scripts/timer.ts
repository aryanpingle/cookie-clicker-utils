import chalk from 'chalk';
import { table } from 'table';

const GLOBAL = '$$$';

export class Timer {
    startTimes: Record<string, DOMHighResTimeStamp>;
    durations: Record<string, DOMHighResTimeStamp>;
    latest: string[];

    constructor() {
        this.startTimes = {};
        this.durations = {};
        this.latest = [];
    }

    start(name?: string) {
        const key = name ?? GLOBAL;
        this.startTimes[key] = performance.now();
        this.latest.push(key);
    }

    stop() {
        const endTime = performance.now();

        const key = this.latest.pop();
        if (!key) return;

        const startTime = this.startTimes[key]!;
        const duration = endTime - startTime;

        if (!Object.hasOwn(this.durations, key)) this.durations[key] = duration;
        else this.durations[key]! += duration;
    }

    withTimer<TFunc extends (...args: any[]) => any>(
        name: string,
        func: TFunc,
    ) {
        return (...args: Parameters<TFunc>): ReturnType<TFunc> => {
            this.start(name);
            const ret = func(...args);
            this.stop();
            return ret;
        };
    }

    print() {
        const globalTime = this.durations[GLOBAL]!;

        const entries = Object.keys(this.durations)
            .filter((name) => name !== GLOBAL)
            .map((name) => {
                const duration = this.durations[name]!;
                const durationStr = inMs(duration);
                return [
                    name,
                    durationStr,
                    `${Math.floor((100 * duration) / globalTime)}%`,
                ];
            });

        const tableData = [
            ...entries,
            [chalk.bold('Total'), inMs(globalTime), '100%'],
        ];

        console.log(
            table(tableData, {
                columns: {
                    1: {
                        alignment: 'right',
                    },
                    2: {
                        alignment: 'right',
                    },
                },
                header: {
                    content: 'Timing',
                    alignment: 'center',
                },
            }),
        );
    }
}

function inMs(duration: number) {
    return `${Math.round(duration)}ms`;
}
