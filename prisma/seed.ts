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
        groupCount: 4,
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

const load = async () => {
    try {
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

        await prismaSeed.programPlan.create({
            data: {
                programId: 1,
                date: new Date().toISOString(),
                isExample: false,
                totalMinutes: 60,
                groupCount: 4,
                activities: {
                    create: [
                        {
                            name: "Parachute",
                            description: "Playing with the Parachute",
                            minutes: 15,
                            supplies: {
                                create: [
                                    {
                                        name: "parachute",
                                        quantity: 4
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })


        await prismaSeed.programPlan.create({
            data: {
                programId: 1,
                date: new Date().toISOString(),
                isExample: false,
                totalMinutes: 60,
                groupCount: 4,
                activities: {
                    create: [
                        {
                            name: "Darts",
                            description: "Add a little danger to the day",
                            minutes: 15,
                            supplies: {
                                create: [
                                    {
                                        name: "darts",
                                        quantity: 4
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })

        await prismaSeed.programPlan.create({
            data: {
                programId: 2,
                date: new Date().toISOString(),
                isExample: false,
                totalMinutes: 60,
                groupCount: 4,
                activities: {
                    create: [
                        {
                            name: "Lightning",
                            description: "basketball game",
                            minutes: 15,
                            supplies: {
                                create: [
                                    {
                                        name: "basketballs",
                                        quantity: 4
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })

        await prismaSeed.programPlan.create({
            data: {
                programId: 3,
                date: new Date().toISOString(),
                isExample: false,
                totalMinutes: 60,
                groupCount: 4,
                activities: {
                    create: [
                        {
                            name: "Slime making",
                            description: "Make some slime",
                            minutes: 15,
                            supplies: {
                                create: [
                                    {
                                        name: "eggs",
                                        quantity: 4
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })

        await prismaSeed.programPlan.create({
            data: {
                programId: 4,
                date: new Date().toISOString(),
                isExample: false,
                totalMinutes: 60,
                groupCount: 4,
                activities: {
                    create: [
                        {
                            name: "Ice Breaker",
                            description: "Group talking",
                            minutes: 15,
                            supplies: {
                                create: [
                                    {
                                        name: "ice breakers",
                                        quantity: 4
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })

        console.log('Added ProgramPlans')
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prismaSeed.$disconnect();
    }
};

load();