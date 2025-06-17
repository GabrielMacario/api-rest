import express from "express";
import pool from "./connection/connection.js";
import selecaoController from "./controllers/selecao-controller.js";

const app = express();

// indicar para o express ler body com json
app.use(express.json());

// pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

app.get("/", selecaoController.hello);
app.get("/selecoes", selecaoController.index);
app.get("/selecoes/:id", selecaoController.show);
app.post("/selecoes", selecaoController.store);
app.delete("/selecoes/:id", selecaoController.delete);
app.put("/selecoes/:id", selecaoController.update);

export default app;
