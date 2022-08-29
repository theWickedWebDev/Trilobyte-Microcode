const args = process.argv.slice(2);
const shouldBuildBinary = args.findIndex(a => a === 'bin') !== -1;

import './lib/Number';      // Custom Number Prototype
import './lib/Array';       // Custom Array Prototype
import './Instructions';    // Adds Instructions
import Logger from './lib/logger';

import { EepromWriter, InstructionSet }from './classes';

const Microcode = new EepromWriter();

Object.values(InstructionSet.set).map(i => Microcode.addInstruction(i));

Logger(Microcode.buf, 32);

if (shouldBuildBinary) Microcode.dump();
