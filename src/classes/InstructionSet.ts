import { Control } from "./Control";

export type StepType = {
    read?: number,
    write?: number,
    util?: number,
};

export type InstructionType = {
    opcode: number,
    steps: number[][],
};

class InstructionSet extends Control {
    #MAX_LENGTH = 0xff;
    opcode: number;
    set: { [key: string]: InstructionType }

    constructor() {
        super();
        this.set = {}
    }

    add(name: string, steps: StepType[]) {
        if (Object.values(this.set).length >= this.#MAX_LENGTH) throw Error(`Cannot add instruction ${name}. You have ran out of room. The max number of instructions is ${this.#MAX_LENGTH}`)
        
        this.set[name] = {
            opcode: Object.keys(this.set).length,
            steps: steps.map(c => ([c.read, c.write, c.util]))
        };
    }

    getByOpcode(op: number) {
        const val = Object.entries(this.set).filter(([ _, data ]) => data.opcode === op)[0];
        if (!val) return {};
        return { mnemonic: val[0], opcode: val[1].opcode };
    }

    getByMnemonic(mnemonic: string) {
        return this.set[mnemonic];
    }
}

const _InstructionSet = new InstructionSet();

export default _InstructionSet;
