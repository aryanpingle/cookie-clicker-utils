import chalk from 'chalk';
import { table } from 'table';

type TimeNodeRecord = Record<string, TimeNode>;

type TimeNode = {
    startTime: number;
    duration: number;
    nodes: TimeNodeRecord;
};

export class Timer {
    root: TimeNode;
    path: string[];
    current: TimeNode;

    constructor() {
        this.root = {
            startTime: 0,
            duration: 0,
            nodes: {},
        };
        this.current = this.root;
        this.path = [];
    }

    private getOrCreateNode(name: string): TimeNode {
        return this.current.nodes[name] ?? this.createNode(name);
    }

    private createNode(name: string): TimeNode {
        const node: TimeNode = {
            startTime: 0,
            duration: 0,
            nodes: {},
        };
        this.current.nodes[name] = node;
        return node;
    }

    start(name?: string) {
        const startTime = performance.now();

        if (name) {
            const node = this.getOrCreateNode(name);
            node.startTime = startTime;

            this.path.push(name);
            this.current = node;
        } else {
            this.root.startTime = startTime;
        }
    }

    private goToParent() {
        this.path.pop();

        this.current = this.root;
        for (const p of this.path) {
            this.current = this.current.nodes[p]!;
        }
    }

    stop() {
        const endTime = performance.now();
        this.current.duration += endTime - this.current.startTime;

        this.goToParent();
    }

    withTimer<TFunc extends (...args: any[]) => any>(func: TFunc) {
        return (...args: Parameters<TFunc>): ReturnType<TFunc> => {
            this.start(func.name);
            const ret = func(...args);
            this.stop();
            return ret;
        };
    }

    print() {
        const tableRows: string[][] = [];

        const programTime = this.root.duration;

        for (const key in this.root.nodes) {
            const node = this.root.nodes[key]!;

            const lines: string[] = [key];
            printObjectTree(node, '', lines);

            const treeStr = lines.join('\n');

            const percent = Math.round((100 * node.duration) / programTime);
            tableRows.push([treeStr, inMs(node.duration), `${percent}%`]);
        }

        tableRows.push([
            chalk.bold('Total'),
            chalk.bold(inMs(programTime)),
            chalk.bold('100%'),
        ]);

        const tableStr = table(tableRows, {
            columns: {
                0: { alignment: 'left' },
                1: { alignment: 'right' },
                2: { alignment: 'right' },
            },
            header: {
                content: 'Timing',
                alignment: 'center',
            },
        });
        console.log(tableStr);
    }
}

function inMs(duration: number) {
    const d = Math.round(duration * 100) / 100;
    return `${d}ms`;
}

function printObjectTree(
    obj: TimeNode,
    prefix: string = '',
    lines: string[] = [],
) {
    const keys = Object.keys(obj.nodes);

    keys.forEach((key, index) => {
        const node = obj.nodes[key]!;

        const isLast = index === keys.length - 1;
        const connector = isLast ? '└── ' : '├── ';

        lines.push(prefix + connector + key);

        // If the value is a nested object, recursively print it
        const newPrefix = prefix + (isLast ? '    ' : '│   ');
        printObjectTree(node, newPrefix, lines);
    });
}
