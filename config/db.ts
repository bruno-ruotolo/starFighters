import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const dbConfig: any = ({
  connectionString: "postgres://postgres:22578@localhost:5432/starfighters"
});

if (process.env.MODE === "PROD") {
  dbConfig.ssl = {
    rejectUnauthorized: false
  }
};

const db = new Pool(dbConfig);
export default db;