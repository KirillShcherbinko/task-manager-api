import taskController from '@/controllers/task-controller';
import { validationMiddleware } from '@/middlewares/validation-middleware';
import { taskSchema, updateTaskSchema } from '@/schemas/task-schema';

import Router from 'express';

export const taskRouter = Router();

taskRouter.get('/tasks', taskController.getAllTasks);
taskRouter.post('/tasks/new', validationMiddleware(taskSchema), taskController.createTask);
taskRouter.patch('/tasks/:id', validationMiddleware(updateTaskSchema), taskController.updateTask);
taskRouter.delete('/tasks/:id', taskController.deleteTask);
