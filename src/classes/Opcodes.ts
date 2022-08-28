class _Opcodes {
    codes: string[];

    constructor() {
        this.codes = [];
    }

    new(name: string) {
        if (this.codes.some(c => c === name)) {
            throw new Error("You have already defined this OpCode");
        };
        this.codes.push(name);
        return this.codes.length - 1;
    }
    list() {
        const codes: {[key: string]: string } = {};
        this.codes.forEach((c, i) => codes[i.hex(0, true)] = c);
        return codes
    }

    getName(index: number) {
        return this.codes[index];
    }
}

const Opcodes = new _Opcodes();

export default Opcodes;