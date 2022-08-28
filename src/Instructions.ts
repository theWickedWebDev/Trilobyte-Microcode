import Instruction from './classes/Instruction';
import * as Step from './Steps';
import Opcodes from './classes/Opcodes';

//
export const INSTRUCTION_INC_A = new Instruction({
    opcode: Opcodes.new('INC_A'),
    steps: [{...Step.INC_A, util: Step.RESET_STEP.util} ]
});

export const INSTRUCTION_DEC_A = new Instruction({
    opcode: Opcodes.new('DEC_A'),
    steps: [{...Step.DEC_A, util: Step.RESET_STEP.util} ]
});

export const INSTRUCTION_MOV_A_C = new Instruction({
    opcode: Opcodes.new('MOV_A_C'),
    steps: [{...Step.MOV_A_C, util: Step.RESET_STEP.util} ]
});
