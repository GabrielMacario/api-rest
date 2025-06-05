import app from "./src/app.js";
import connection from "./connection/connection.js";
import dotenv from "dotenv";

connection.connect((error) => {
  if (error) {
    console.log(`❌ Conexão falhou, error mostrado: ${error}`);
  } else {
    console.log(`✅ Conectado ao MySQL com ID: ${connection.threadId}`);

    app.listen(process.env.PORT, () => {
      console.log(
        `Servidor rodando no endereço http://localhost:${process.env.PORT}`
      );
    });
  }
});
