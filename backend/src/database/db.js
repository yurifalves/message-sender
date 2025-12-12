import { Pool } from "pg";
import dotenv from "dotenv";
import { getEnvironmentVariable } from "../helper/environment_variables.js";
dotenv.config();
const pool = new Pool({
    host: getEnvironmentVariable("DB_HOST"),
    port: Number(getEnvironmentVariable("DB_PORT")),
    database: getEnvironmentVariable("DB_NAME"),
    user: getEnvironmentVariable("DB_USERNAME"),
    password: getEnvironmentVariable("DB_PASSWORD"),
});
//# sourceMappingURL=db.js.map