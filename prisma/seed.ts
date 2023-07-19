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

const load = async () => {
    try {
        await prismaSeed.program.deleteMany();
        console.log('Deleted records in program table');

        await prismaSeed.$queryRaw`ALTER TABLE Program AUTO_INCREMENT = 1`;
        console.log('reset product auto increment to 1');

        await prismaSeed.program.createMany({
            data: programs,
        });
        console.log('Added product data');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prismaSeed.$disconnect();
    }
};

load();