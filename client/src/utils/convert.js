const calculatePriceInCrypto = (variantPriceUSD, coinPriceUSD) => {
  return parseFloat(variantPriceUSD) / parseFloat(coinPriceUSD);
};

export default calculatePriceInCrypto;
