

export async function GET(Request: any) {
    return new Response("This is a success");
}

export async function POST(req: Request) {
    const requestData = await req.json();

    const { program, date, totalMinutes, groupCount } = requestData

    console.log(program.id)

    await prisma?.programPlan.create({
        data: {
            date: new Date(date).toISOString(),
            isExample: false,
            groupCount: groupCount,
            totalMinutes: totalMinutes,
            activities: {
                create: {
                    description: "test",
                    minutes: 60,
                    name: "test",
                }
            },
            programId: program.id,

        }
    })

    return new Response("success")
}