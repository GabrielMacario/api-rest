import app from "./src/app.js";
import pool from "./connection/connection.js";

pool.connect((error) => {
  if (error) {
    console.log(`❌ Conexão falhou, error mostrado: ${error}`);
  } else {
    console.log(`✅ Conectado ao PostgreSQL com ID: ${pool.threadId}`);

    app.listen(process.env.PORT, () => {
      console.log(
        `Servidor rodando no endereço http://localhost:${process.env.PORT}`
      );
    });
  }
});
