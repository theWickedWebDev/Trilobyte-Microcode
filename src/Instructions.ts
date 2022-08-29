import { InstructionSet, ControlLines }from './classes';
import { FETCH_INSTRUCTION } from './constants/steps';

const { read, write, util } = ControlLines;

InstructionSet.add('mov a, c', [...FETCH_INSTRUCTION,
    { write: write.A, read: read.C, util: util.RESET_STEP }
]);

InstructionSet.add('mov a, d', [...FETCH_INSTRUCTION,
    { write: write.A, read: read.C, util: util.RESET_STEP }
]);
