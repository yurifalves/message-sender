import express from 'express';
import dotenv from 'dotenv';
import { dirname, resolve } from "path";
import { fileURLToPath } from 'url';
import type { Express, Request, Response } from 'express';

const __filename: string = fileURLToPath(import.meta.url); // C:\...\message-sender\src\server.ts
const __dirname: string = dirname(__filename); // C:\...\message-sender\src
dotenv.config({
  path: resolve(__dirname, "..", ".env") // C:\...\message-sender\.env
});

const app: Express = express();
const port = process.env.PORT;
console.log(port);



if (port === null) throw new Error("PORT environment variable is not defined");

app.get('/', (req: Request, res: Response): void => {
  res.send('Express + TypeScript Server');
});

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});