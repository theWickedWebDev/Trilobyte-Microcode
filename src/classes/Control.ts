export class Control {
    #_READS  = { 'GPR':   0, 'ALU':   0x10, 'NOT_ALU': 0x20, 'MISC3': 0x30, 'MISC4': 0x40, 'MISC5': 0x50, 'MISC6': 0x60, 'MISC7': 0x70 };
    #_WRITES = { 'GPR':   0, 'JCC':   0x10, 'MISC2':   0x20, 'MISC3': 0x30, 'MISC4': 0x40, 'MISC5': 0x50, 'MISC6': 0x60, 'MISC7': 0x70 };
    #_UTILS =  { 'UTIL0': 0, 'UTIL1': 0x10, 'UTIL2':   0x20, 'UTIL3': 0x30, 'UTIL4': 0x40, 'UTIL5': 0x50, 'UTIL6': 0x60, 'UTIL7': 0x70 };

    controlLines = {
        read: {
            ...[
                'NOP',                      'C',                    'D',                    'S1',
                'S2',                       'S1S2',                 'F',                    'S3',
                'S3LSB',                    'S3MSB'
            ].toDictionary(this.#_READS.GPR),
            ...[
                "A",                        "ADD",                  "ADC",                  "SUB",
                "SBB",                      "INC",                  "DEC",                  "AND",
                "OR",                       "XOR",                  "SHL",                  "SHR",
                "ASL",                      "ASR",                  "ROR",                  "ROL"
            ].toDictionary(this.#_READS.ALU),
            ...[
                "NOT",                      "NADD",                 "NADC",                 "NSUB", 
                "NSBB",                     "NINC",                 "NDEC",                 "NAND",
                "NOR",                      "XNOR",                 "NSHL",                 "NSHR", 
                "NASL",                     "NASR",                 "NROR",                 "NROL",
            ].toDictionary(this.#_READS.NOT_ALU),
            ...[
                "MEM_CODE",                 "MEM_DATA",             "MEM_STACK",            "CODE_SEGMENT",
                "DATA_SEGMENT",             "STACK_SEGMENT",        "INTERRUPT_PORT",       "FLAGS",
                "PROGRAM_COUNTER",          "STACK_POINTER",        "IO",                   "IO_MEMORY",
                "DISPLACEMENT",             "UNUSED_D",             "UNUSED_E",             "UNUSED_F",
            ].toDictionary(this.#_READS.MISC3),
        },
        write: {
            ...[
                "NOP",                      "C",                    "D",                    "S1",
                "S2",                       "F",                    "S3"
            ].toDictionary(this.#_WRITES.GPR),
            ...[
                "JUMP",                     "JLE_JNG",              "JG_JNLE",              "JGE_JNL",
                "JL_JNGE",                  "JA_JNBE",              "JBE_JNA",              "JNB_JAE_JNC",
                "JB_JNAE_JC",               "JNE_JNZ",              "JE_JZ",                "JNS",
                "JS",                       "JNO",                  "JO"
            ].toDictionary(this.#_WRITES.JCC),
            ...[
                "MEM_CODE",                 "MEM_DATA",             "MEM_STACK",            "MAR",
                "CODE_SEGMENT",             "DATA_SEGMENT",         "STACK_SEGMENT",        "DEC_PROGRAM_COUNTER",
                "STACK_POINTER",            "FLAGS",                "RESTORE_FLAGS",        "INSTRUCTION_REGISTER",
                "A",                        "B",                    "UNUSED",               "RESET_GPR",
            ].toDictionary(this.#_WRITES.MISC2),
            ...[
                "INT_PRIORITY_REGISTER",    "INT_MASK_REGISTER",    "IO",                   "IO_MEM",
                "OFFSET_REGISTER",          "INDEX_REGISTER",       "DEC_INDEX",            "INC_INDEX",
                "INC_DISPLACEMENT",         "DISPLACEMENT_LATCH",   "UNUSED0",              "UNUSED1",
                "UNUSED2",                  "UNUSED3",              "UNUSED4",              "UNUSED5", 
            ].toDictionary(this.#_WRITES.MISC3),
            ...[
                "INDEXED_1_OFFSET",         "INDEXED_2_OFFSET",     "INDEXED_4_OFFSET",     "INDEXED_8_OFFSET",
                "INDEXED_1",                "INDEXED_2",            "INDEXED_4",            "INDEXED_8",
                "OFFSET",                   "UNUSED0",              "UNUSED1",              "UNUSED2",
                "UNUSED3",                  "UNUSED4",              "UNUSED5",              "UNUSED6", 
            ].toDictionary(this.#_WRITES.MISC4),
        },
        util: {
            ...[
                "NOP",                      "INC_PC",               "RESET_STEP",           "INC_STACK_POINTER",
                "DEC_STACK_POINTER",
            ].toDictionary(this.#_UTILS.UTIL0),
        }
    }
}

const { controlLines } = new Control();

export default controlLines;
