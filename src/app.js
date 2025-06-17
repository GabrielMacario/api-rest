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
  const sql = "select * from selecoes where id=$1";

  pool.query(sql, [id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ detalhe: error.message, error });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

app.post("/selecoes", (req, res) => {
  const { selecao, grupo } = req.body;
  const sql =
    "INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2) RETURNING *";

  pool.query(sql, [selecao, grupo], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ detalhe: error.message, error });
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

app.delete("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM selecoes WHERE id = $1";

  pool.query(sql, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ detalhe: error.message, error });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({ mensagem: "Seleção não encontrada." });
    }

    res
      .status(200)
      .json({ mensagem: `Seleção com ID ${id} removida com sucesso!` });
  });
});

app.put("/selecoes/:id", (req, res) => {
  const id = req.params.id;
  const { selecao, grupo } = req.body;

  if (!selecao || !grupo) {
    return res
      .status(400)
      .json({ mensagem: "Campos 'selecao' e 'grupo' são obrigatórios." });
  }

  const sql =
    "UPDATE selecoes SET selecao = $1, grupo = $2 WHERE id = $3 RETURNING *";

  pool.query(sql, [selecao, grupo, id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ detalhe: error.message, error });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({ mensagem: "Seleção não encontrada." });
    }

    res.status(200).json(result.rows[0]);
  });
});

export default app;
