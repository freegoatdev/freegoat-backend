
// Este é um exemplo simples. A lógica real depende da assinatura da carteira.
module.exports = (req, res) => {
  const { signature } = req.body;
  if (signature === "assinatura.valida") {
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
};
