const fs = require('fs');

fs.readFile('example.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo_do_arquivo);
});

console.log('essa mensagem aparace primniro.');