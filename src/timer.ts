import chalk from 'chalk';
import { writeFileSync } from 'node:fs';
import { table } from 'table';

const ROOT_NAME = 'Program';

type TimeNodeRecord = Record<string, TimeNode>;

type TimeNode = {
    name: string;
    startTime: number;
    duration: number;
    count: number;
    nodes: TimeNodeRecord;
};

export class Timer {
    root: TimeNode;
    path: string[];
    current: TimeNode;
    stdout: string[];

    constructor() {
        this.root = {
            name: ROOT_NAME,
            startTime: 0,
            duration: 0,
            count: 0,
            nodes: {},
        };
        this.current = this.root;
        this.path = [];
        this.stdout = [];
    }

    private getOrCreateNode(name: string): TimeNode {
        return this.current.nodes[name] ?? this.createNode(name);
    }

    private createNode(name: string): TimeNode {
        const node: TimeNode = {
            name: name,
            startTime: 0,
            duration: 0,
            count: 0,
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
            node.count++;

            this.path.push(name);
            this.current = node;
        } else {
            this.root.startTime = startTime;
            this.root.count++;
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

    private printCurrentTable() {
        const children = Object.values(this.current.nodes);
        if (children.length === 0) return;

        const CURRENT_NODE_DURATION = this.current.duration;

        const tableRows: string[][] = [];

        for (const childNode of children) {
            const treeStrLines: string[] = [childNode.name];
            printObjectTree(childNode, '', treeStrLines);
            const treeStr = treeStrLines.join('\n');

            const durationStr = inMs(childNode.duration);

            const childCallCount = childNode.count;

            const avgDurationStr = inMs(childNode.duration / childCallCount);

            const percent = Math.round(
                (100 * childNode.duration) / CURRENT_NODE_DURATION,
            );

            tableRows.push([
                treeStr,
                durationStr,
                String(childCallCount),
                avgDurationStr,
                `${percent}%`,
            ]);
        }

        tableRows.push([
            'Total',
            inMs(CURRENT_NODE_DURATION),
            String(this.current.count),
            inMs(CURRENT_NODE_DURATION / this.current.count),
            '100%',
        ]);

        const tableName =
            this.path.length <= 1
                ? this.current.name
                : this.path.slice(-2).join('\n▼\n');
        const tableStr = table(tableRows, {
            columns: {
                0: { alignment: 'left' },
                1: { alignment: 'right' },
                2: { alignment: 'right' },
                3: { alignment: 'right' },
                4: { alignment: 'right' },
            },
            header: {
                content: tableName,
                alignment: 'center',
            },
        });
        this.stdout.push(tableStr);
    }

    private printCurrentRecursively() {
        this.printCurrentTable();

        for (const childNode of Object.values(this.current.nodes)) {
            // Go to the node
            this.path.push(childNode.name);
            this.current = childNode;

            this.printCurrentRecursively();

            this.goToParent();
        }
    }

    print(filename: string) {
        this.stdout = [];

        this.printCurrentRecursively();

        writeFileSync(filename, this.stdout.join('\n'));
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

export const timer = new Timer();
