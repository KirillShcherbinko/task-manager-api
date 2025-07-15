import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';

import { taskRouter } from './routes/task-router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/', taskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
