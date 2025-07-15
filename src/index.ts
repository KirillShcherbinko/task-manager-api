import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
