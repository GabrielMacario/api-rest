import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.connect((error) => {
  if (error) {
    console.log(`❌ Conexão falhou, error mostrado: ${error}`);
  } else {
    console.log(`✅ Conectado ao PostgreSQL`);
  }
});

export default pool;
