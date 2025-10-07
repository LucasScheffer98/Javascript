import {somar, subtrair, multiplicar, dividir} from './modulos/funcoes_matematicas.js';
import * as calculadoraidade from './modulos/calculadora_idade.js';



console.log(`Resultado da soma: ${somar(1, 1)}`);

console.log(`Resultado da subtração: ${subtrair(8, 4)}`);

console.log(`Resultado da multiplicação: ${multiplicar(2, 3)}`);

console.log(`Resultado da divisão: ${dividir(32, 4)}`);



console.log(calculadoraidade.idade('Sophia', 2010, 2025));
