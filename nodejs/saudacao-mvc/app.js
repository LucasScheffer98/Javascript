const express = require('express');
const path = require('path');
const app = express();

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

// Exporta o app para que o bin/www possa iniciar o servidor
module.exports = app;
