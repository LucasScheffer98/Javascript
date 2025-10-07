const fs = require('fs');

fs.readFile('example.txt', 'utf8', (erro, data) => {
    if (erro) {
        console.error('Erro ao ler arquivo', erro);
        return;
    }
    console.log('Conteúdo do arquivo', data);
});

console.log('Esta mensagem aparece primeiro.')