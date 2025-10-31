const produtosModel = require('../models/produtosModel');
const { cadastrar } = require('../models/produtosModel');
const { camisetas } = require('./produtosController');
module.exports = {
    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: 'views' });
    },
    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: 'views' });
    },
    formCadProd: (req, res) => {
        res.sendFile('formCadProd.html', { root: 'views' });
    }   ,
    cadastrar: (req, res) => {
        const { codigo, descricao, nome, quantidade, valor } = req.body;
        const mensagem = produtosModel.cadastrar(codigo, descricao, nome, quantidade, valor);
        res.send(`<h1>${mensagem}</h1>`);
    }   
};