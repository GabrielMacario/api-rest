import pool from "../connection/connection.js";

class selecaoController {
  hello(req, res) {
    res.send("Hello Word!");
  }
  index(req, res) {
    const sql = "select * from selecoes";

    pool.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ detalhe: error.message, error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(req, res) {
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
  }

  store(req, res) {
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
  }

  update(req, res) {
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
  }

  delete(req, res) {
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
  }
}

export default new selecaoController();
