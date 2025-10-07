//importando o modulo http
const http = require('http');

//criando um servidor que responde com Hello World!
http.createServer((req, res) => {
//definido o cabeçalho da resposta co mstatus de 200 (OK)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //adicionando a respsota "Hello Word" 
    res.end('Oi Pessoas! Hihi 😁');
    //adicionando um log para a cada requisição recebida
}).listen(8080);