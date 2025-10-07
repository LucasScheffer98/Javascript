//importa o express
import express from 'express';
const app = express();
const port = 3000;
app.use((req, res, next) => {
  res.setHeader("content-type", "text/html; charset=utf-8");
  next();
});

//Roteamento básico
app.get("/", (req, res) => {
  res.status(200).send("<h1>Página Inicial</h1>");
});

app.get("/sobre", (req, res) => {
  res.status(200).send("<h1>Sobre Nós</h1>");
});

app.get("/contato", (req, res) => {
  res.status(200).send("<h1>Contato</h1>");
});

app.get("/fotos", (req, res) => {
  res.status(200).send("<h1>Fotos</h1>");
});

//Rota para lidar com páginas não encontradas (404)
app.use((req, res) => {
  res.status(404).send("<h1>Página Não Encontrada</h1>");
});

//Inicia o servidor para ouir na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});