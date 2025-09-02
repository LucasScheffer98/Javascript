function somar (a, b) {
    return a + b;
}

function subtrair (a, b) {
    return a - b;
}       

function multiplicar (a, b) {
    return a * b;
}   

function dividir (a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero não é permitida.';
    }
    return a / b;
}

module.exports = { 
    somar, subtrair, multiplicar, dividir 
}; // Exportando as funções

function idade (anoNascimento, anoAtual) {
    return anoAtual - anoNascimento;
}