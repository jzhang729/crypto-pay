const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurrencySchema = new Schema({
  coinName: String,
  coinSymbol: String,
  coinPriceUSD: String,
  coinLastUpdated: String
});

module.exports = CurrencySchema;
