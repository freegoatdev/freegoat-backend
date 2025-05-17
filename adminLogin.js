module.exports = (req, res) => {
  const adminWallet = "DvfKW8vupWzuAH58P6Tws87FpZNUUpfeqbidNRgev6m9";
  const requestWallet = req.body.wallet;

  if (requestWallet === adminWallet) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};
