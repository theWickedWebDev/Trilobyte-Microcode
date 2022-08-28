import Step from './classes/Step';
import { READ, WRITE, UTIL } from './Controls';

// Micro Instructions
const NOP = new Step({ read: READ.NOP, write: WRITE.NOP, util: UTIL.NOP }).value;
const MOV_PC_MAR = new Step({ read: READ.PROGRAM_COUNTER, write: WRITE.MAR }).value;
const MOV_DATA_IR = new Step({ read: READ.MEM_DATA, write: WRITE.INSTRUCTION_REGISTER}).value;
const INC_A = new Step({ read: READ.INC }).value;
const DEC_A = new Step({ read: READ.DEC }).value;
const MOV_A_C = new Step({ write: WRITE.A, read: READ.C }).value;

// Util Partials
const RESET_STEP = new Step({ util: UTIL.RESET_STEP }).value;
const INC_PC = new Step({ util: UTIL.INC_PC }).value;

export { 
    // Micro Instructions
    NOP,
    MOV_PC_MAR,
    MOV_DATA_IR,
    MOV_A_C,
    INC_A,
    DEC_A,
    // Util Partials
    INC_PC,
    RESET_STEP,
};
