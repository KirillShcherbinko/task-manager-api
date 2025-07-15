import prisma from '@/config/prisma';

import { Task } from '@prisma/client';

class TaskService {
  async getAllTasks() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }

  async createTask(task: Task) {
    const createdTask = await prisma.task.create({
      data: { ...task },
    });
    return createdTask;
  }

  async updateTask(taskId: number, newTaskData: Partial<Task>) {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: newTaskData,
    });
    return updatedTask;
  }

  async deleteTask(taskId: number) {
    await prisma.task.delete({ where: { id: taskId } });
  }
}

export default new TaskService();
