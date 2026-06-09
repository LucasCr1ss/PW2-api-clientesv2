const Cliente = require("../src/model/Cliente");

const clientes = [
  new Cliente(1, "Ana Paula Souza", "(11) 91234-5678", "Rua das Flores, 123 - São Paulo/SP"),
  new Cliente(2, "Bruno Costa", "(21) 99876-5432", "Av. Atlântica, 456 - Rio de Janeiro/RJ"),
  new Cliente(3, "Carla Mendes", "(31) 98765-4321", "Rua Ouro Preto, 789 - Belo Horizonte/MG"),
  new Cliente(4, "Diego Alves", "(41) 97654-3210", "Rua XV de Novembro, 101 - Curitiba/PR"),
  new Cliente(5, "Elisa Ferreira", "(51) 96543-2109", "Av. Borges de Medeiros, 202 - Porto Alegre/RS"),
  new Cliente(6, "Thais Obana", "(11) 96543-2109", "Av. XV de Novembro, 11 - São Paulo/SP"),
];

module.exports = clientes;
