import prisma from '@/config/prisma';

async function main() {
  await prisma.task.deleteMany();
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "tasks_id_seq" RESTART WITH 1`);

  const now = new Date();

  await prisma.task.createMany({
    data: [
      {
        title: 'Fix login page validation',
        description: "Login form doesn't show error messages for invalid credentials",
        category: 'Bug',
        status: 'ToDo',
        priority: 'High',
        createdAt: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000), // 6 дней назад
      },
      {
        title: 'Implement dark mode toggle',
        description: 'Add theme switcher between light and dark modes',
        category: 'Feature',
        status: 'InProgress',
        priority: 'Medium',
        createdAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 дней назад
      },
      {
        title: 'Update API documentation',
        description: 'Add examples for new endpoints in Swagger',
        category: 'Documentation',
        status: 'Done',
        priority: 'Low',
        createdAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000), // 4 дня назад
      },
      {
        title: 'Refactor user service',
        description: 'Optimize database queries in user management module',
        category: 'Refactor',
        status: 'InProgress',
        priority: 'Medium',
        createdAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 дня назад
      },
      {
        title: 'Write unit tests for auth module',
        description: 'Cover authentication logic with Jest tests',
        category: 'Test',
        status: 'ToDo',
        priority: 'High',
        createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 дня назад
      },
      {
        title: 'Mobile menu not closing',
        description: 'Navigation stays open after clicking menu items on mobile',
        category: 'Bug',
        status: 'Done',
        priority: 'Medium',
        createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 день назад
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
