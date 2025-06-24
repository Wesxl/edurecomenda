const db = require("../db");

const Curso = {
  listar: (callback) => {
    db.query("SELECT * FROM cursos", callback);
  },

  criar: (dados, callback) => {
    const sql = "INSERT INTO cursos SET ?";
    db.query(sql, dados, callback);
  },

  atualizar: (id, dados, callback) => {
    const sql = "UPDATE cursos SET ? WHERE id = ?";
    db.query(sql, [dados, id], callback);
  },

  deletar: (id, callback) => {
    const sql = "DELETE FROM cursos WHERE id = ?";
    db.query(sql, [id], callback);
  },

  buscarPorId: (id, callback) => {
    const sql = "SELECT * FROM cursos WHERE id = ?";
    db.query(sql, [id], callback);
  }
};

module.exports = Curso;
