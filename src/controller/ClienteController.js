const Clientes = require("../../data/cliente");

const ListarClientes = async (req, res) => {
    try{
        return res.status(200).json({
            sucesso: true, 
            total: Clientes.length,
            dados: Clientes,
        });
    } catch(error){
        return res.status(500).json({
            sucesso: false, 
            mensagem: "Erro ao listar clientes",
            erro: error.message,
        });
    }
};

const BuscarClientePorId = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID inválido. Deve ser um número inteiro",
            });
        }

        const Cliente = Clientes.find((c) => c.id === id);

        if(!Cliente){
            return res.status(404).json({
                sucesso: false,
                Mensagem: `Cliente com o id ${id} não encontrado`,
            });
        }

        return res.status(200).json({
            sucesso: true,
            dados: Cliente,
        });

    }catch(error){
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar cliente por id",
            erro: error.message,
        });
    }

    

}

const adicionarCliente = async(req, res) => {
   try{
      const { nome, telefone, endereco } = req.body;
      const novo_cliente = new Cliente(
        clientes.lenght + 1,
        nome,
        telfone,
        endereco
      );
      clientes.push(novo_cliente);
      return res,status(201).jason({
        sucesso: true,
        mensagem: "Usuario adicionado com sucesso"
      });
      
    }catch(error){
      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao adicionar cliente",
        erro: error.message
      })
    }
}

// PUT /clientes/:id - atualiza um cliente pelo id:

const atualizarCliente = async (req, res) => {
    try{
      const { id } = req.params;
      const { nome, telfone, endereco } = req.body
      
      const cliente = clientes.find((c) => c.id == id);

      if(!cliente){
        return res.status(484).json({
            sucesso: false,
            mensagem: `Cliente de id ${id} nao encontrado`
        });
      }else{
        cliente.nome = nome;
        cliente.telefone = telefone;
        cliente.endereco = endereco;

        return res.status(200).json({
            sucesso: true,
            mensagem: "Cliente atualizado com sucesso"
        })
      }


    }catch(error){
      return res.status(500).jason({
        sucesso: false,
        mensagem: "Erro ao atualizar cliente",
        erro: error.message
      });
    }
}


const deletarCliente = async(req, res) => {
    try{
      const { id } = req.params;
      const index = clientes.findIndex((c) => c.id == id);
      
      if(index === -1){
         return res.status(404).json({
         sucesso: false,
         mensagem: `Clientes de ${id} nao encontrado`
        })
      }else{
        clientes.splice(index, 1);
        return res.status(200).json({
            sucesso: true, 
            mensagem: `Cliente com ${id} removido com sucesso`
        });

      }



    }catch(error){
      return res.status(500).jason({
        sucesso: false,
        mensagem: "Erro ao remover cliente",
        erro: error.message
    })
}
}

module.exports = {
    ListarClientes,
    BuscarClientePorId,
    adicionarCliente,
    atualizarCliente,
    deletarCliente,
};