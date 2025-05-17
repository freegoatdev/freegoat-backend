
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FREEGOAT backend rodando com Express na porta dinâmica!");
});

app.post("/adminLogin", (req, res) => {
  const { signature } = req.body;
  if (signature === "assinatura.valida") {
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
