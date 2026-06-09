const express = require("express");
const router = express.Router();
const clienteController = require("../controller/ClienteController");
const clientes = require("../../data/cliente");

router.get("/", clienteController.ListarClientes);
router.get("/:id", clienteController.BuscarClientePorId);


router.post("/:id", clienteController.adicionarCliente);
router.put("/:id", clienteController.atualizarCliente);
router.delete("/:id", clienteController.deletarCliente);





module.exports = router;