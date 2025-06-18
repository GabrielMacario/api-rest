import pool from "../connection/connection.js";

class selecaoService {
  create() {}
  findAll() {
    const sql = "select * from selecoes";

    return new Promise((resolve, reject) =>
      pool.query(sql, (erro, resultado) => {
        if (erro) {
          return reject("não foi possivel localizar", message, erro);
        }
        return resolve(resultado.rows);
      })
    );
  }
  findById() {}
  update() {}
  delete() {}
}

export default new selecaoService();
