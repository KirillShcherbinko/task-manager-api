import taskService from '@/services/task-service';

import { Request, Response } from 'express';

class TaskController {
  async getAllTaks(_request: Request, response: Response) {
    try {
      const tasks = await taskService.getAllTasks();
      response.status(200).json(tasks);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Server error';
      response.status(500).json({ message });
    }
  }

  async createTask(request: Request, response: Response) {
    try {
      const task = request.body;
      const createdTask = await taskService.createTask(task);
      return response.status(200).json(createdTask);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Server error';
      response.status(500).json({ message });
    }
  }
}

export default new TaskController();
