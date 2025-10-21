const saudacaoModel = require ('../models/clientresModel');

module.exports = {
    formLogin: (req, res) => {
        res.sendFile('login.html', { root: './views' });
  },
    listarClientes: (req, res) => {
        const { login, senha } = req.body;
        const mensagemAcesso = clientesModen.verificarLogin(login, senha);
        res.send(`<h1>${mensagemAcesso}</h1>`);
  }
};