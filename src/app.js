const path = require("path");
const prisma = require("./config/prisma");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: path.resolve(__dirname, ".env")  });

const express = require("express");
const clienteRoutes = require("./Routes/clienteRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
        mensagem: "API de clientes",
        versao: "1.0.0",
        endpoints: {
            ListarTodos: "GET /clientes",
            BuscarPorId: "GET0 /clientes/:id",
            
        }
    })
})

app.use("/clientes", clienteRoutes);

app.use((req, res) =>{
    res.status(404).json({
        sucesso: false, 
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})

module.exports = app;