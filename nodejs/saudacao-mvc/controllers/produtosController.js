// Controller simples para produtos
module.exports = {
  cadastrar: (req, res) => {
    // Pega todos os campos enviados no corpo da requisição
    const produto = { ...req.body };

    // Constrói uma listagem legível dos campos enviados
    let listaCampos = '';
    if (Object.keys(produto).length === 0) {
      listaCampos = '<p><em>Nenhum dado foi recebido.</em></p>';
    } else {
      listaCampos = '<ul>' + Object.keys(produto).map(key => {
        const valor = produto[key] === undefined || produto[key] === '' ? '<em>vazio</em>' : produto[key];
        return `<li><strong>${key}:</strong> ${valor}</li>`;
      }).join('') + '</ul>';
    }

    // Retorna uma página simples com a confirmação e os dados enviados
    res.send(`
      <!doctype html>
      <html lang="pt-br">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Confirmação de Cadastro</title>
          <style>
            body { font-family: Arial, Helvetica, sans-serif; padding: 20px; }
            h1 { color: #2b6cb0; }
            ul { list-style: none; padding: 0; }
            li { margin: 6px 0; }
            .footer { margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>Produto cadastrado</h1>
          <p>Os dados que você enviou foram:</p>
          ${listaCampos}
          <div class="footer">
            <p><a href="/produtos/cadastrar">Cadastrar outro produto</a></p>
            <p><a href="/produtos">Voltar para produtos</a></p>
          </div>
        </body>
      </html>
    `);
  }
};
