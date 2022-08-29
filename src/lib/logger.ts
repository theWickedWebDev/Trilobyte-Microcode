import chalk from 'chalk';
import { printFooter, getByteString } from './logger-util';
import InstructionSet from '../classes/InstructionSet';

const Logger = (_data: Buffer, cols: number = 32) => {
    const data = [..._data]; // Convert Buffer to Array

    let cnt = 0;
    let opcodeCount = 0;
    const data0 = data.slice(0, 0x1000);
    const data1 = data.slice(0x1000, 0x2000);
    const data2 = data.slice(0x2000, 0x3000);

    for (let s = 0; s < data0.length; s = s + cols) {
        [data0, data1, data2].forEach((c, i) => {
            const opcode = InstructionSet.getByOpcode(cnt).mnemonic;
            if (opcode) {
                if (i === 0) console.log('\n' + chalk.bold.magenta((opcodeCount / 3).hex(2, true)) + '  ' + chalk.bold.underline.magenta(opcode) + '\n');
                console.log('      ' + (i * 0x1000 + s).hex(4, true, '$') + ': ' + getByteString(c.slice(s, s + cols), i));
                opcodeCount++;
            }
        });

        cnt++;
    }
    printFooter(opcodeCount);
};

export default Logger;
