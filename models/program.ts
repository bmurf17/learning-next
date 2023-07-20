import { ProgramPlan } from '@prisma/client';

export type Program = {
    id: number;
    name: string;
    description: string;
    image: string;
    programPlans: ProgramPlan[];
}