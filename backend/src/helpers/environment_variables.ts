import dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { printBoldBlue } from "./formatted_print.js";

const __filename: string = fileURLToPath(import.meta.url); // C:\...\message-sender\src\helper\environment_variables.ts
const __dirname: string = dirname(__filename); // C:\...\message-sender\src\helper
const envFilePath: string = resolve(__dirname, "..", "..", ".env"); // C:\...\message-sender\.env

const environmentVariables = dotenv.config({
  path: envFilePath
});

function printEnvironmentVariables(): void {
    if (environmentVariables.error !== undefined) {
        throw environmentVariables.error;
    }
    if (environmentVariables.parsed === undefined) {
        throw new Error(`No environment variables found on ${envFilePath}`);
    }

    const numberOfVariables: number = Object.keys(environmentVariables.parsed).length;
    printBoldBlue(`Loaded ${numberOfVariables} environment variables from "${envFilePath}":`);
    for (const [key, value] of Object.entries(environmentVariables.parsed)) {
        console.log(`${key}=${value}`);
    }
}

function getEnvironmentVariable(key: string): string {
  const value: string | undefined = process.env[key];
  if (value === undefined) throw new Error(`Environment variable ${key} is not defined`);

  return value;
}

export { getEnvironmentVariable, printEnvironmentVariables };