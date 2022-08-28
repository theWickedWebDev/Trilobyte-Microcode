import './lib/Number'; // Custom Number Prototype
import EepromWriter from './classes/Eeprom';
import * as Instructions from './Instructions';
import Logger from './lib/logger';
const Microcode = new EepromWriter();

for (let i in Object.values(Instructions)) {
    Microcode.addInstruction(Object.values(Instructions)[i]);
}

const data = new Array(128).fill(0).map((_, i) => i);
Logger(Microcode.buf);
// Microcode.dump();

// console.log(Opcodes.list());

