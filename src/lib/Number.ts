declare global {
  interface Number {
    hex(pad?: number, usePrefix?: boolean, prefix?: string): string;
  }
}

/**
 * @name HexNumber
 * @description Formats a Number into Hexidecimal (with options)
 * @arg {number} [pad] `Optional` - Amount of padding in front of string
 * @arg {boolean} [usePrefix] `Optional` - Toggles adding the prefix
 * @arg {prefix=} [prefix] `Optional` - Override default prefix
 * @example
  const a = (32).hex();             //     20
  const a = (32).hex(4);            //   0020
  const a = (32).hex(4, true)       // 0x0020
  const a = (32).hex(4, true, '$')  //  $0020
*/
const HexNumber = function (pad: number = 0, usePrefix: boolean = false, prefix: string = '0x') {
    const pre = usePrefix ? prefix : '';
    return pre + Number(this).toString(16).padStart(pad, '0');
};

Number.prototype.hex = HexNumber;

export {};