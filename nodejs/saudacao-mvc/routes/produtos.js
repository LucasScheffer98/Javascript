const express = require("express");
const router = express.Router();
const siteController = require('../controllers/siteController');
const produtosController = require('../controllers/produtosController');

// Rotas já existentes
router.get('/', siteController.produtos);
router.get('/camisetas', siteController.camisetas);

// Rota para mostrar o formulário de cadastro
router.get('/cadastrar', (req, res) => {
  res.sendFile('cadastroProd.html', { root: './views' });
});

// Rota para receber o formulário de cadastro de produto
router.post('/cadastrar', (req, res) => {
  const { id, descricao, quantidade, valor_unitario } = req.body;

  // Chama o controller para cadastrar o produto
  produtosController.cadastrar({
    id,
    descricao,
    quantidade,
    valor_unitario
  });

  // Envia uma mensagem em formato de tabela mostrando os dados digitados
  res.send(`
    <h2>Produto cadastrado com sucesso!</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><th>ID</th><td>${id}</td></tr>
      <tr><th>Descrição</th><td>${descricao}</td></tr>
      <tr><th>Quantidade</th><td>${quantidade}</td></tr>
      <tr><th>Valor Unitário</th><td>R$ ${valor_unitario}</td></tr>
    </table>
    <br>
    <a href="/cadastrar">Voltar ao formulário</a>
  `);
});

module.exports = router;
