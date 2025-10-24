const { login } = require("../controllers/usuariosController");

module.exports = {
    gerarmensagemLogin: (usuario, senha) => {
        let acesso;
        if (usuario === 'lucas' && senha === '123') {
            acesso = "Acesso Permitido";
        } else {
            acesso = "Acesso Negado";
        }
        return `Olá, ${usuario}! Seu acesso foi ${acesso}.`;
    }
};