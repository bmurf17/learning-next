

export async function GET(Request: any) {
    return new Response("This is a success");
}

export async function POST(req: Request) {
    const requestData = await req.json();
    const { name } = requestData
    console.log(name)

    await prisma?.programPlan.create({
        data: {
            date: new Date().toISOString(),
            isExample: false,
            groupCount: 5,
            totalMinutes: 65,
            activities: {
                create: {
                    activityId: 1
                }
            },
            programId: 1,

        }
    })

    return new Response("success")
}