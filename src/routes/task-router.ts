import taskController from '@/controllers/task-controller';

import Router from 'express';

export const taskRouter = Router();

taskRouter.get('/tasks', taskController.getAllTaks);
taskRouter.post('/tasks/:taskId');
taskRouter.patch('/tasks/:taskId');
taskRouter.delete('/tasks/taskId');
