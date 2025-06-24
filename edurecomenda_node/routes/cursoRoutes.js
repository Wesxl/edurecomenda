const express = require("express");
const router = express.Router();
const controller = require("../controllers/cursoController");

router.get("/", controller.listar);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.deletar);
router.get("/:id", controller.buscarPorId);


module.exports = router;