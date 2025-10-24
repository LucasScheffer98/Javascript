const usuariosModel = require('../models/usuariosModel');
const path = require('path');

module.exports = {
  formLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formLogin.html'));
  },

  listarClientes: (req, res) => {
    // Exemplo: retornar lista estática. Substitua por lógica de modelo/BD.
    const clientes = [
      { id: 1, nome: 'Fulano' },
      { id: 2, nome: 'Beltrano' }
    ];
    res.json(clientes);
  }
};
