import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().nonempty().max(50),
  description: z.string().max(200).optional().nullable(),
});

export const updateTaskSchema = z.object({
  title: z.string().nonempty().max(50).optional(),
  description: z.string().max(200).optional().nullable(),
});
