declare global {
  interface Array<T> {
    toDictionary(start?: number): {[key: string | number]: number };
  }
}

const ToDictionary = function (start?: number) {
    return this.reduce((a: {[key: string | number]: number}, c: string, i: number) => { a[String(c)] = i + start; return a; }, {});
};

Array.prototype.toDictionary = ToDictionary;

export {};

