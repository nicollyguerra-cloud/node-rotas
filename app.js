import express from "express";


const app = express();


app.use(express.json());

// "Banco de dados" em memória: o sistema começa com um array vazio
let usuarios = [];

// Rota de SAÍDA de dados (GET) -> retorna a lista de usuários para o front-end
app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

// Rota de ENTRADA de dados (POST) -> recebe um usuário pelo body
app.post("/usuarios", (req, res) => {
  console.log(req.body); // mostra no console o que chegou pelo corpo

  usuarios.push(req.body); // adiciona o novo objeto no array

  // 201 = criado com sucesso
  res.status(201).json({
    mensagem: "Cliente cadastrado",
    usuarios,
  });
});

// Liga o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});