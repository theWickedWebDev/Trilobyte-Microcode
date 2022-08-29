import chalk from 'chalk';

/**
 * @name trim
 * @description Trims all items from the end of an array that match test
 * @param {[number]} data `Required` - An array of numbers
 * @param {number} [test] `Optional` - An array of numbers
 * @example
 * ```
 * const res = trim([1,2,3,0,0]); // [1,2,3]
 * ```
*/
export const trim = (data: number[], test: number = 0): number[] => {
    let arr = data;
    while(arr[arr.length - 1] === test) arr.pop();
    return arr;
};

/**
 * 
 * @param {number[]} arr `Required` An array of bytes
 * @param {number} bank `Required` EEPROM Address ([0x0..0x2]) 
 * @returns {string} An array joined with ' ' - styled with Chalk
 * @example
 * ```
 * const arr = [1,2,3,4];
 * const str = getByteString(arr, 2);
 * console.log(str);
 * ```
 */
export const getByteString = (arr: number[], bank: number): string => {
    return trim(arr)
        .map((d, i) => {
            const isNop = d === 0;
            const isFetchInstruction = i <= 1;
            const isResetStep = d === 2 && bank === 2; // 0x2 && Util
            const isMemory = (bank === 0 && d == 56) || (bank === 1 && d == 35);
            const isIncPc = (bank === 2 && d === 1);
            // TODO: isMemory
            // TODO: isRegister
            // TODO: ..others
            if (isIncPc) return chalk.italic.green(d.hex(2, false));
            if (isFetchInstruction) return chalk.italic.dim(d.hex(2, false));
            if (isMemory) return chalk.italic.yellow(d.hex(2, false));
            if (isNop) return chalk.italic.dim.gray('00');
            if (isResetStep) return chalk.red(d.hex(2, false));
            return chalk.blue(d.hex(2, false));
        }).join(' ');
};


/* --------------------- \/ randos \/ -------------------------- */

export const printLegend = (): void => console.log('[' + chalk.magenta('Instruction') + ']  [' + chalk.yellow.dim('Fetch') + ']  [' + chalk.yellow('Memory') + ']  [' + chalk.blue('Active Step') + ']  [' + chalk.green('Inc PC') + ']  [' + chalk.red('Reset') + ']')

export const printHr = (): void => console.log(chalk.dim('-----------------------------------------------\n'));

export const printOverview = (cnt: number) : void => {
    const count = cnt / 3;
    console.log(chalk.bold.cyan('Instructions:   ') + count + '/256' + '  |  ' + (count / 256).toFixed(2) + "%  |  " + (256 - count) + ' remaining');
}

export const printFooter = (cnt: number): void => {
    console.log('\n');
    printLegend();
    console.log('\n');
    printOverview(cnt);
    console.log('\n');
}