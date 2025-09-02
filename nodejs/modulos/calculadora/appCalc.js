const funcoesMat = require('./funcoesMat');
const calculadora_idade = require('./calculadora_idade');

console.log("soma:", funcoesMat.somar(2, 3));
console.log("subtração:", funcoesMat.subtrair(5, 2));
console.log("multiplicação:", funcoesMat.multiplicar(4, 3));
console.log("divisão:", funcoesMat.dividir(10, 2));


console.log(calculadora_idade.idade("Evelin", 2006, 2050));

//Exemplo de Uso:
const resultadoSoma = funcoesMat.somar(5, 3);
console.log(`Resultado da Soma: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMat.subtrair(10, 4);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);

const resultadoMulplicacao = funcoesMat.multiplicar(7, 7);
console.log(`Resultado da Multiplicação: ${resultadoMulplicacao}`);

const resultadoDivisao = funcoesMat.dividir(20, 4);
console.log(`Resultado da Divisão: ${resultadoDivisao}`);

