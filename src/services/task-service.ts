import prisma from '@/config/prisma';
import { TTaskItem } from '@/types/task-types';

class TaskService {
  async getAllTasks() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }

  async createTask(task: TTaskItem) {
    const createdTask = prisma.task.create({
      data: { ...task },
    });
    return createdTask;
  }
}

export default new TaskService();
