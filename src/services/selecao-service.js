import pool from "../connection/connection.js";

class selecaoService {
  hello() {
    return "Hello Word!";
  }

  create(selecao, grupo) {
    const sql =
      "INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2) RETURNING *";

    return new Promise((resolve, reject) =>
      pool.query(sql, [selecao, grupo], (error, result) => {
        if (error) {
          console.log(error);
          return reject({ detalhe: error.message, error });
        } else {
          return resolve(result.rows);
        }
      })
    );
  }

  findAll() {
    const sql = "select * from selecoes";

    return new Promise((resolve, reject) =>
      pool.query(sql, (error, result) => {
        if (error) {
          return reject("não foi possivel localizar", message, error);
        }
        return resolve(result.rows);
      })
    );
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id = $1";

    return new Promise((resolve, reject) => {
      pool.query(sql, [id], (error, result) => {
        if (error) {
          return reject(
            new Error(`Erro ao buscar seleção com id ${id}: ${error.message}`)
          );
        }

        const selecao = result.rows[0];
        if (!selecao) {
          return reject(new Error(`Seleção com id ${id} não encontrada.`));
        }

        resolve(selecao);
      });
    });
  }

  update({ selecao, grupo }) {
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

  delete() {}
}

export default new selecaoService();
