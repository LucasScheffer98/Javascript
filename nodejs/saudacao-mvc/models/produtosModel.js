module.exports = {

    cadastrar: (codigo, descricao, nome, quantidade, valor) => {

        return `O produto ${nome} de codigo ${codigo} com quantidade ${quantidade} e valor ${valor} foi cadastrado com sucesso!`;
    }
};