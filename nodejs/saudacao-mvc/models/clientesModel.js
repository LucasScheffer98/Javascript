module.exports = {
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "Joedio"&& senha === "12345") {
      acesso = "logado";

    } else {
        acesso = "negado";
    }
    return 'Olá, ${login}! Seu acesso foi ${acesso}!';
    }
};
