const express = require("express");
const cors = require("cors");
const adminLogin = require("./adminLogin");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de login de admin
app.post("/adminLogin", adminLogin);

// Rota padrão (GET /)
app.get("/", (req, res) => {
  res.send("FREEGOAT backend rodando com Express na porta dinâmica!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});