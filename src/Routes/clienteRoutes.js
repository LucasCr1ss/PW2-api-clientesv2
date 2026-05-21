const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/ClienteeController");
const clientes = require("../../data/cliente");

router.get("/", clienteController.ListarClientes);
router.get("/:id", clienteController.BuscarClientePorId);


router.post("/:id", clienteControllerlienteController.adicionarCliente);
router.put("/:id", clienteControllerlienteController.atualizarCliente);
router.delete("/:id", clienteControllerlienteController.deletarCliente);





module.exports = router;