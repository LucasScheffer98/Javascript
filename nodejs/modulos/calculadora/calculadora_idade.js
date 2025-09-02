function idade(nome, anoNasc, anoAtual){
    idade = anoAtual - anoNasc;
    return `Olá, ${nome}! Em ${anoAtual} você terá ${idade} anos.`;
}
//Exportando a função para que possa ser usada em outros arquivos
module.exports = { idade };