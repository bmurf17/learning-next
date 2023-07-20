const { PrismaClient } = require('@prisma/client');
const prismaSeed = new PrismaClient();

const programs = [
    {
        name: 'Cool helmet.',
        description: 'A nice helmet to wear on your head',
        image: '/images/helmet.jpg',
    },
    {
        name: 'Grey T-Shirt',
        description: 'A nice shirt that you can wear on your body',
        image: '/images/shirt.jpg',
    },
    {
        name: 'Socks',
        description: 'Cool socks that you can wear on your feet',
        image: '/images/socks.jpg',
    },
    {
        name: 'Sweatshirt',
        description: 'Cool sweatshirt that you can wear on your body',
        image: '/images/sweatshirt.jpg',
    },
];

const programPlans = [
    {
        programId: 1,
        date: new Date().toISOString(),
        isExample: false,
        totalMinutes: 60,
        groupCount: 4
    },
    {
        programId: 1,
        date: new Date().toISOString(),
        isExample: false,
        totalMinutes: 60,
        groupCount: 4
    },
    {
        programId: 2,
        date: new Date().toISOString(),
        isExample: false,
        totalMinutes: 60,
        groupCount: 4
    },
    {
        programId: 3,
        date: new Date().toISOString(),
        isExample: false,
        totalMinutes: 60,
        groupCount: 4
    },
    {
        programId: 4,
        date: new Date().toISOString(),
        isExample: false,
        totalMinutes: 60,
        groupCount: 4
    }
]

const activities = [
    {
        name: "Slime making",
        description: "Make some slime",
        minutes: 15
    },
    {
        name: "Lightning",
        description: "basketball game",
        minutes: 15
    },
    {
        name: "Kick Ball",
        description: "Kick ball",
        minutes: 15
    },
    {
        name: "Ice Breaker",
        description: "Group talking",
        minutes: 15
    },
    {
        name: "Parachute Time",
        description: "In the gym",
        minutes: 15
    }
]

const supplies = [
    {
        name: "eggs",
        quantity: 4
    },
    {
        name: "honey mustard",
        quantity: 4
    },
    {
        name: "popcorn ",
        quantity: 4
    },
    {
        name: "socks",
        quantity: 4
    },
    {
        name: "glue",
        quantity: 4
    },
    {
        name: "basketball",
        quantity: 4
    }
]

const activitiesForProgramPlans = [
    {
        programPlanId: 1,
        activityId: 1,
    },
    {
        programPlanId: 2,
        activityId: 2,
    },
    {
        programPlanId: 3,
        activityId: 3,
    },
    {
        programPlanId: 4,
        activityId: 4,
    },
    {
        programPlanId: 5,
        activityId: 5,
    },
]

const suppliesForActivities = [
    {
        supplyId: 1,
        activityId: 1,
    },
    {
        supplyId: 2,
        activityId: 2,
    },
    {
        supplyId: 3,
        activityId: 3,
    },
    {
        supplyId: 4,
        activityId: 4,
    },
    {
        supplyId: 5,
        activityId: 5,
    },
    {
        supplyId: 6,
        activityId: 5,
    }
]

const load = async () => {
    try {
        await prismaSeed.activitiesForProgramPlans.deleteMany();
        console.log('Deleted records in activities for program table')

        await prismaSeed.suppliesForActivities.deleteMany();
        console.log('Deleted records in SuppliesForActivities table')

        await prismaSeed.supply.deleteMany();
        console.log('Deleted records in activity table')

        await prismaSeed.$queryRaw`ALTER TABLE Supply AUTO_INCREMENT = 1`;
        console.log('reset activity auto increment to 1');

        await prismaSeed.activity.deleteMany();
        console.log('Deleted records in activity table')

        await prismaSeed.$queryRaw`ALTER TABLE Activity AUTO_INCREMENT = 1`;
        console.log('reset activity auto increment to 1');

        await prismaSeed.programPlan.deleteMany();
        console.log('Deleted records in program plan table')

        await prismaSeed.$queryRaw`ALTER TABLE ProgramPlan AUTO_INCREMENT = 1`;
        console.log('reset program plan auto increment to 1');

        await prismaSeed.program.deleteMany();
        console.log('Deleted records in program table');

        await prismaSeed.$queryRaw`ALTER TABLE Program AUTO_INCREMENT = 1`;
        console.log('reset program plan auto increment to 1');

        await prismaSeed.program.createMany({
            data: programs,
        });
        console.log('Added programs data');

        await prismaSeed.programPlan.createMany({
            data: programPlans
        })
        console.log('Add ProgramPlans')

        await prismaSeed.activity.createMany({
            data: activities
        })
        console.log('Activities Added')

        await prismaSeed.supply.createMany({
            data: supplies
        })
        console.log('Supplies Added')

        await prismaSeed.activitiesForProgramPlans.createMany({
            data: activitiesForProgramPlans
        })
        console.log('ActivitiesForProgramPlans added')

        await prismaSeed.suppliesForActivities.createMany({
            data: suppliesForActivities
        })
        console.log('SuppliesForActivities added')


    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prismaSeed.$disconnect();
    }
};

load();