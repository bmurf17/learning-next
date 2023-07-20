import { Activity } from './activity';

export type ProgramPlan = {
    id: number;
    programId: number;
    date: Date;
    isExample: boolean;
    totalMinutes: number;
    groupCount: number;
    activities: Activity[];
}