import { PrismaClient, Prisma } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

export const prisma =
    global.prisma ||
    new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export type ActivitiesWithSupplies = Prisma.ActivityGetPayload<{
    include: { supplies: true };
}>;

export type ProgramPlanWithActivities = Prisma.ProgramPlanGetPayload<{
    include: {
        activities: true
    };
}>;

export type ProgramWithProgramPlans = Prisma.ProgramGetPayload<{
    include: {
        programPlans: true
    }
}>