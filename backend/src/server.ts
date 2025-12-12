import express from "express";
import dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { printEnvironmentVariables, getEnvironmentVariable } from "./helpers/environment_variables.js";
import type { Express, Request, Response } from "express";


printEnvironmentVariables();

// const app: Express = express();
// const port: string = getEnvironmentVariable("SERVER_PORT");
// if (port === null) throw new Error("PORT environment variable is not defined");
// 
// app.get("/", (req: Request, res: Response): void => {
//   res.send("Express + TypeScript Server");
// });
// 
// app.listen(port, (): void => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });