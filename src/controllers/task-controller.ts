import taskService from '@/services/task-service';

import { Request, Response } from 'express';

class TaskController {
  async getAllTasks(_request: Request, response: Response) {
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
      response.status(201).json(createdTask);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Server error';
      response.status(500).json({ message });
    }
  }

  async updateTask(request: Request, response: Response) {
    try {
      console.log('taskId:', request.params.id);
      const taskId = Number(request.params.id);
      const newTaskData = request.body;
      await taskService.updateTask(taskId, newTaskData);
      response.status(200).send();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Server error';
      response.status(500).json({ message });
    }
  }

  async deleteTask(request: Request, response: Response) {
    try {
      const taskId = Number(request.params.id);
      const deletedTask = await taskService.deleteTask(taskId);
      response.status(204).json(deletedTask);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Server error';
      response.status(500).json({ message });
    }
  }
}

export default new TaskController();
