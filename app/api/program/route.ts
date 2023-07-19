import { Program } from '@/models/program';

export async function GET(Request: Request) {
    const programs: Program[] = [
        {
            name: "Sunday Circle"
        },
        {
            name: "Floor Hockey"
        }
    ]


    return new Response(JSON.stringify(programs));
}