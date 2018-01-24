const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurrencySchema = new Schema({
  name: String,
  conversionRateUSD: Number,
  conversionRateDate: Date
});

module.exports = CurrencySchema;
