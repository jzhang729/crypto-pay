const calculatePriceInCrypto = (variantPriceUSD, coinPriceUSD) => {
  return (parseFloat(variantPriceUSD) / parseFloat(coinPriceUSD)).toFixed(5);
};

export default calculatePriceInCrypto;
