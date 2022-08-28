import Control from "./classes/Control";
import ControlGroup from "./classes/ControlGroup";

const READS  = new ControlGroup([ 'GPR', 'ALU', 'NOT_ALU', 'MISC3', 'MISC4', 'MISC5', 'MISC6', 'MISC7' ]);
const WRITES = new ControlGroup([ 'GPR', 'JCC', 'MISC2', 'MISC3', 'MISC4', 'MISC5', 'MISC6', 'MISC7' ]);
const UTILS =  new ControlGroup([ 'UTIL0', 'UTIL1', 'UTIL2', 'UTIL3', 'UTIL4', 'UTIL5', 'UTIL6', 'UTIL7' ]);

export const READ = {
    // No Operation
    NOP:                    new Control({ group: READS.get('GPR'), control: 0x0 }).value,
    
    // General Purpose Register - Read Control
    C:                      new Control({ group: READS.get('GPR'), control: 0x01 }).value,
    D:                      new Control({ group: READS.get('GPR'), control: 0x02 }).value,
    S1:                     new Control({ group: READS.get('GPR'), control: 0x03 }).value,
    S2:                     new Control({ group: READS.get('GPR'), control: 0x04 }).value,
    S1S2:                   new Control({ group: READS.get('GPR'), control: 0x05 }).value,
    F:                      new Control({ group: READS.get('GPR'), control: 0x06 }).value,
    S3:                     new Control({ group: READS.get('GPR'), control: 0x07 }).value,
    S3LSB:                  new Control({ group: READS.get('GPR'), control: 0x08 }).value,
    S3MSB:                  new Control({ group: READS.get('GPR'), control: 0x09 }).value,
    /* GPR Group - [0x0a..0x0f]: unused and inaccessible */

    // Arithmetic Logic Unit Control Group 1
    A:                      new Control({ group: READS.get('ALU'), control: 0x0 }).value,
    ADD:                    new Control({ group: READS.get('ALU'), control: 0x1 }).value,
    ADC:                    new Control({ group: READS.get('ALU'), control: 0x2 }).value,
    SUB:                    new Control({ group: READS.get('ALU'), control: 0x3 }).value,
    SBB:                    new Control({ group: READS.get('ALU'), control: 0x4 }).value,
    INC:                    new Control({ group: READS.get('ALU'), control: 0x5 }).value,
    DEC:                    new Control({ group: READS.get('ALU'), control: 0x6 }).value,
    AND:                    new Control({ group: READS.get('ALU'), control: 0x7 }).value,
    OR:                     new Control({ group: READS.get('ALU'), control: 0x8 }).value,
    XOR:                    new Control({ group: READS.get('ALU'), control: 0x9 }).value,
    SHL:                    new Control({ group: READS.get('ALU'), control: 0xa }).value,
    SHR:                    new Control({ group: READS.get('ALU'), control: 0xb }).value,
    ASL:                    new Control({ group: READS.get('ALU'), control: 0xc }).value,
    ASR:                    new Control({ group: READS.get('ALU'), control: 0xd }).value,
    ROR:                    new Control({ group: READS.get('ALU'), control: 0xe }).value,
    ROL:                    new Control({ group: READS.get('ALU'), control: 0xf }).value,

    // Arithmetic Logic Unit Control Group 2 (Inverted Output)
    NOT:                    new Control({ group: READS.get('NOT_ALU'), control: 0x0 }).value,
    NADD:                   new Control({ group: READS.get('NOT_ALU'), control: 0x1 }).value,
    NADC:                   new Control({ group: READS.get('NOT_ALU'), control: 0x2 }).value,
    NSUB:                   new Control({ group: READS.get('NOT_ALU'), control: 0x3 }).value,
    NSBB:                   new Control({ group: READS.get('NOT_ALU'), control: 0x4 }).value,
    NINC:                   new Control({ group: READS.get('NOT_ALU'), control: 0x5 }).value,
    NDEC:                   new Control({ group: READS.get('NOT_ALU'), control: 0x6 }).value,
    NAND:                   new Control({ group: READS.get('NOT_ALU'), control: 0x7 }).value,
    NOR:                    new Control({ group: READS.get('NOT_ALU'), control: 0x8 }).value,
    XNOR:                   new Control({ group: READS.get('NOT_ALU'), control: 0x9 }).value,
    NSHL:                   new Control({ group: READS.get('NOT_ALU'), control: 0xa }).value,
    NSHR:                   new Control({ group: READS.get('NOT_ALU'), control: 0xb }).value,
    NASL:                   new Control({ group: READS.get('NOT_ALU'), control: 0xc }).value,
    NASR:                   new Control({ group: READS.get('NOT_ALU'), control: 0xd }).value,
    NROR:                   new Control({ group: READS.get('NOT_ALU'), control: 0xe }).value,
    NROL:                   new Control({ group: READS.get('NOT_ALU'), control: 0xf }).value,
    
    // Misc Group 3
    MEM_CODE:               new Control({ group: READS.get('MISC3'), control: 0x0 }).value,
    MEM_DATA:               new Control({ group: READS.get('MISC3'), control: 0x1 }).value,
    MEM_STACK:              new Control({ group: READS.get('MISC3'), control: 0x2 }).value,
    CODE_SEGMENT:           new Control({ group: READS.get('MISC3'), control: 0x3 }).value,
    DATA_SEGMENT:           new Control({ group: READS.get('MISC3'), control: 0x4 }).value,
    STACK_SEGMENT:          new Control({ group: READS.get('MISC3'), control: 0x5 }).value,
    INTERRUPT_PORT:         new Control({ group: READS.get('MISC3'), control: 0x6 }).value,
    FLAGS:                  new Control({ group: READS.get('MISC3'), control: 0x7 }).value,
    PROGRAM_COUNTER:        new Control({ group: READS.get('MISC3'), control: 0x8 }).value,
    STACK_POINTER:          new Control({ group: READS.get('MISC3'), control: 0x9 }).value,
    IO:                     new Control({ group: READS.get('MISC3'), control: 0xa }).value,
    IO_MEMORY:              new Control({ group: READS.get('MISC3'), control: 0xb }).value,
    DISPLACEMENT:           new Control({ group: READS.get('MISC3'), control: 0xc }).value,
    // UNUSED_D:            new Control({ group: READS.get('MISC3'), control: 0xd }).value,        UNUSED
    // UNUSED_E:            new Control({ group: READS.get('MISC3'), control: 0xe }).value,        UNUSED
    // UNUSED_F:            new Control({ group: READS.get('MISC3'), control: 0xf }).value,        UNUSED
};

export const WRITE = {
/* No Operation */
    NOP:                    new Control({ group: WRITES.get('GPR'), control: 0x0 }).value,
    
/* General Purpose Register - Write Control */
    C:                      new Control({ group: WRITES.get('GPR'), control: 0x1 }).value,
    D:                      new Control({ group: WRITES.get('GPR'), control: 0x2 }).value,
    S1:                     new Control({ group: WRITES.get('GPR'), control: 0x3 }).value,
    S2:                     new Control({ group: WRITES.get('GPR'), control: 0x4 }).value,
    F:                      new Control({ group: WRITES.get('GPR'), control: 0x5 }).value,
    S3:                     new Control({ group: WRITES.get('GPR'), control: 0x6 }).value,
    // GPR Group - [0x07..0x0f]: unused and inaccessible

/* Arithmetic Logic Unit Control Group 2 (Inverted Output) */
    JUMP:                   new Control({ group: WRITES.get('JCC'), control: 0x0 }).value,
    JLE_JNG:                new Control({ group: WRITES.get('JCC'), control: 0x1 }).value,
    JG_JNLE:                new Control({ group: WRITES.get('JCC'), control: 0x2 }).value,
    JGE_JNL:                new Control({ group: WRITES.get('JCC'), control: 0x3 }).value,
    JL_JNGE:                new Control({ group: WRITES.get('JCC'), control: 0x4 }).value,
    JA_JNBE:                new Control({ group: WRITES.get('JCC'), control: 0x5 }).value,
    JBE_JNA:                new Control({ group: WRITES.get('JCC'), control: 0x6 }).value,
    JNB_JAE_JNC:            new Control({ group: WRITES.get('JCC'), control: 0x7 }).value,
    JB_JNAE_JC:             new Control({ group: WRITES.get('JCC'), control: 0x8 }).value,
    JNE_JNZ:                new Control({ group: WRITES.get('JCC'), control: 0x9 }).value,
    JE_JZ:                  new Control({ group: WRITES.get('JCC'), control: 0xa }).value,
    JNS:                    new Control({ group: WRITES.get('JCC'), control: 0xb }).value,
    JS:                     new Control({ group: WRITES.get('JCC'), control: 0xc }).value,
    JNO:                    new Control({ group: WRITES.get('JCC'), control: 0xd }).value,
    JO:                     new Control({ group: WRITES.get('JCC'), control: 0xe }).value,
    /* GPR Group - [0x0f]: unused and inaccessible */

/* Misc Group 2 */
    MEM_CODE:               new Control({ group: WRITES.get('MISC2'), control: 0x0 }).value,
    MEM_DATA:               new Control({ group: WRITES.get('MISC2'), control: 0x1 }).value,
    MEM_STACK:              new Control({ group: WRITES.get('MISC2'), control: 0x2 }).value,
    MAR:                    new Control({ group: WRITES.get('MISC2'), control: 0x3 }).value,
    CODE_SEGMENT:           new Control({ group: WRITES.get('MISC2'), control: 0x4 }).value,
    DATA_SEGMENT:           new Control({ group: WRITES.get('MISC2'), control: 0x5 }).value,
    STACK_SEGMENT:          new Control({ group: WRITES.get('MISC2'), control: 0x6 }).value,
    DEC_PROGRAM_COUNTER:    new Control({ group: WRITES.get('MISC2'), control: 0x7 }).value,
    STACK_POINTER:          new Control({ group: WRITES.get('MISC2'), control: 0x8 }).value,
    FLAGS:                  new Control({ group: WRITES.get('MISC2'), control: 0x9 }).value,
    RESTORE_FLAGS:          new Control({ group: WRITES.get('MISC2'), control: 0xa }).value,
    INSTRUCTION_REGISTER:   new Control({ group: WRITES.get('MISC2'), control: 0xb }).value,
    A:                      new Control({ group: WRITES.get('MISC2'), control: 0xc }).value,
    B:                      new Control({ group: WRITES.get('MISC2'), control: 0xd }).value,
    // UNUSED:              new Control({ group: WRITES.get('MISC2'), control: 0xe }).value,        UNUSED
    RESET_GPR:              new Control({ group: WRITES.get('MISC2'), control: 0xf }).value,

/* Misc Group 3 */
    INT_PRIORITY_REGISTER:  new Control({ group: WRITES.get('MISC3'), control: 0x0 }).value,
    INT_MASK_REGISTER:      new Control({ group: WRITES.get('MISC3'), control: 0x1 }).value,
    IO:                     new Control({ group: WRITES.get('MISC3'), control: 0x2 }).value,
    IO_MEM:                 new Control({ group: WRITES.get('MISC3'), control: 0x3 }).value,
    // OFFSET_REGISTER:     new Control({ group: WRITES.get('MISC3'), control: 0x4 }).value,
    // INDEX_REGISTER:      new Control({ group: WRITES.get('MISC3'), control: 0x5 }).value,
    // DEC_INDEX:           new Control({ group: WRITES.get('MISC3'), control: 0x6 }).value,
    // INC_INDEX:           new Control({ group: WRITES.get('MISC3'), control: 0x7 }).value,
    // INC_DISPLACEMENT:    new Control({ group: WRITES.get('MISC3'), control: 0x8 }).value,
    // DISPLACEMENT_LATCH:  new Control({ group: WRITES.get('MISC3'), control: 0x9 }).value,
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xa }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xb }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xc }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xd }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xe }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC3'), control: 0xf }).value,        UNUSED

/* Misc Group 4 */
    // INDEXED_1_OFFSET:    new Control({ group: WRITES.get('MISC4'), control: 0x0 }).value,
    // INDEXED_2_OFFSET:    new Control({ group: WRITES.get('MISC4'), control: 0x1 }).value,
    // INDEXED_4_OFFSET:    new Control({ group: WRITES.get('MISC4'), control: 0x2 }).value,
    // INDEXED_8_OFFSET:    new Control({ group: WRITES.get('MISC4'), control: 0x3 }).value,
    // INDEXED_1:           new Control({ group: WRITES.get('MISC4'), control: 0x4 }).value,
    // INDEXED_2:           new Control({ group: WRITES.get('MISC4'), control: 0x5 }).value,
    // INDEXED_4:           new Control({ group: WRITES.get('MISC4'), control: 0x6 }).value,
    // INDEXED_8:           new Control({ group: WRITES.get('MISC4'), control: 0x7 }).value,
    // OFFSET:              new Control({ group: WRITES.get('MISC4'), control: 0x8 }).value,
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0x9 }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xa }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xb }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xc }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xd }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xe }).value,        UNUSED
    // UNUSED:              new Control({ group: WRITES.get('MISC4'), control: 0xf }).value,        UNUSED
};

export const UTIL = {
    NOP:                    new Control({ group: UTILS.get('UTIL0'), control: 0x0 }).value,
    INC_PC:                 new Control({ group: UTILS.get('UTIL0'), control: 0x1 }).value,
    RESET_STEP:             new Control({ group: UTILS.get('UTIL0'), control: 0x2 }).value,
    INC_STACK_POINTER:      new Control({ group: UTILS.get('UTIL0'), control: 0x3 }).value,
    DEC_STACK_POINTER:      new Control({ group: UTILS.get('UTIL0'), control: 0x4 }).value,
};
