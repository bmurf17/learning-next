import { Supply } from './supply';

export type Activity = {
    id: number;
    name: string;
    description: string;
    minutes: number;
    supplies: Supply[];
}