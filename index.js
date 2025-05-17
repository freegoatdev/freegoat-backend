const express = require("express");
const cors = require("cors");
const adminLogin = require("./adminLogin");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint de login do admin
app.post("/adminLogin", adminLogin);

// Página padrão
app.get("/", (req, res) => {
  res.send("FREEGOAT backend rodando com Express na porta dinâmica!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
