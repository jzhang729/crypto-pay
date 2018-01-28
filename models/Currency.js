const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurrencySchema = new Schema({
  coinName: String,
  coinSymbol: String,
  coinPriceUSD: Number,
  coinLastUpdated: Date
});

module.exports = CurrencySchema;
