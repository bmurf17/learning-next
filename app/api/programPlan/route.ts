import { Activity } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function GET(Request: any) {
    return new Response("This is a success");
}

export async function POST(req: Request) {
    const requestData = await req.json();

    const { program, date, totalMinutes, groupCount, activities } = requestData

    const activityIds = activities.map((act: Activity) => {
        return {
            id: act.id
        }
    })
    var dateOffset = new Date(date);
    dateOffset.setDate(dateOffset.getDate() + 1)

    var data = await prisma?.programPlan.create({
        data: {
            date: dateOffset.toISOString(),
            isExample: false,
            groupCount: groupCount,
            totalMinutes: totalMinutes,
            activities: {
                connect: activityIds
            },
            programId: program.id,

        }
    })

    return NextResponse.json(data)
}