import prisma from '../config/db.js';

async function seed() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: 'hashedpassword123',
    },
  });
  console.log('Database seeded');
}

seed().finally(() => prisma.$disconnect());
