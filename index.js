const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { verifyWalletSignature } = require('./adminLogin');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/admin/login', async (req, res) => {
  const { wallet, signature, message } = req.body;

  if (!wallet || !signature || !message) {
    return res.status(400).json({ error: 'Parâmetros ausentes.' });
  }

  const isValid = await verifyWalletSignature(wallet, signature, message);

  if (!isValid) {
    return res.status(401).json({ error: 'Assinatura inválida.' });
  }

  const adminWallets = ['SuaCarteiraAdminAqui']; // Substituir com a carteira do admin
  const isAdmin = adminWallets.includes(wallet);

  if (!isAdmin) {
    return res.status(403).json({ error: 'Acesso não autorizado.' });
  }

  res.json({ success: true, wallet });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});