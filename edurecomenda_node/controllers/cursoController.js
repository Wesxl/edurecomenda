const Curso = require("../models/cursoModel");

exports.listar = (req, res) => {
  Curso.listar((err, resultados) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(resultados);
  });
};

exports.criar = (req, res) => {
  Curso.criar(req.body, (err, resultado) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: resultado.insertId, ...req.body });
  });
};

exports.atualizar = (req, res) => {
  const id = req.params.id;
  Curso.atualizar(id, req.body, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ msg: "Curso atualizado com sucesso" });
  });
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  Curso.deletar(id, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ msg: "Curso excluído com sucesso" });
  });
};

exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  Curso.buscarPorId(id, (err, resultado) => {
    if (err) return res.status(500).json({ erro: err });
    if (resultado.length === 0) return res.status(404).json({ msg: "Curso não encontrado" });
    res.json(resultado[0]); 
  });
};
