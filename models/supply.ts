import { Activity } from './activity';

export type Supply = {
    id: number;
    name: string;
    quantity: number;
    activities: Activity[];
}