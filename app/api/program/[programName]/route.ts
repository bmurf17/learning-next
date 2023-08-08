import { prisma } from "../../../../lib/prisma"
import { NextResponse } from 'next/server'

export async function GET(req: Request
) {
    const id = req.url?.slice(req.url.lastIndexOf('/') + 1).replace("%20", " ")
    const post = await prisma?.program.findFirst({
        where: {
            name: id,
        },
        include: {
            programPlans: true,
        },
    });
    return NextResponse.json(post)
}