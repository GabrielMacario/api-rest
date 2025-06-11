import express from "express";
import pool from "./connection/connection.js";

const app = express();

// indicar para o express ler body com json
app.use(express.json());

// pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

app.get("/", (req, res) => {
  res.send("Hello Word!");
});

app.get("/selecoes", (req, res) => {
  const sql = "select * from selecoes";

  pool.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ detalhe: error.message, error });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from selecoes where id=?";

  pool.query(sql, id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ detalhe: error.message, error });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Seleção cadastrada com sucesso!");
});

app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`Selecao excluida com id ${req.params.id} com sucesso!`);
});

app.put("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;
  res.json([selecoes]);
});

export default app;
