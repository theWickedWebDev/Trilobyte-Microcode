import ControlLines from '../classes/Control';

const { read, write, util } = ControlLines;

export const FETCH_INSTRUCTION = [
    { write: write.MAR,                     read: read.PROGRAM_COUNTER                        },
    { write: write.INSTRUCTION_REGISTER,    read: read.MEM_CODE,            util: util.INC_PC },
];

