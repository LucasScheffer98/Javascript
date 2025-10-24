const path = require('path');

module.exports = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  },

  formulario: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formLogin.html'));
  },

  login: (req, res) => {
    const { usuario, senha } = req.body || {};
    // Exemplo simples — ajuste para validar via model/BD
    if (usuario === 'admin' && senha === '123') {
      return res.redirect('/');
    }
    return res.status(401).send('Credenciais inválidas');
  }
};