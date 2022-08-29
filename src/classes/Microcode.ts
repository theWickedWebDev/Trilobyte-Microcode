import fs from 'fs';
import { Buffer } from 'node:buffer';

const EEPROM_SIZE = 0x8000;
const BLOCK_SIZE = 0x1000;

/**
 * @class
 * @name EEPROM
 * @description asdfasdf
 */
export default class Eeprom {
    blockSize: number;
    buf: Buffer;

    constructor() {
        this.blockSize = BLOCK_SIZE;
        this.buf = Buffer.alloc(EEPROM_SIZE, 0);
    }
​
    dump(name: string = 'microcode') {
        fs.writeFile(`./binaries/${name}.bin`, this.buf, function (err) {
            if (err) throw Error(err.message);
        });
     }

    addInstruction(a: { opcode: number, steps: number[][]}) {
        const { opcode, steps } = a;
        const start = opcode * 32;
        steps.forEach((step, offset) => {
            this.buf[start + 0 * this.blockSize + offset] = step[0];
            this.buf[start + 1 * this.blockSize + offset] = step[1];
            this.buf[start + 2 * this.blockSize + offset] = step[2];
        });
        return this;
    }
}