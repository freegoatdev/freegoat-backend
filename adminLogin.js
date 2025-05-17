const nacl = require('tweetnacl');
const bs58 = require('bs58');

function verifyWalletSignature(walletAddress, signature, message) {
  try {
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = bs58.decode(signature);
    const publicKeyBytes = bs58.decode(walletAddress);

    return nacl.sign.detached.verify(messageBytes, signatureBytes, publicKeyBytes);
  } catch (error) {
    console.error('Erro ao verificar assinatura:', error);
    return false;
  }
}

module.exports = { verifyWalletSignature };