module.exports = {

    cadastrar:(id, descricao, quantidade, preco) => {

        return `Produto ${descricao} com ID: ${id} - Quantidade: ${quantidade} - Valor Unitario: R$${preco} foi cadastrado com sucesso!`;
    }
};