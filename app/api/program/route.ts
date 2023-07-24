import { prisma } from "../../../lib/prisma";

export async function GET(Request: any) {
    return new Response(JSON.stringify(await prisma?.program.findMany()));
}