const mongoose = require('mongoose');
const CurrencySchema = require('./Currency');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  productID: Number,
  variantID: Number,
  variantPriceUSD: Number,
  currency: [CurrencySchema],
  priceInCrypto: Number,
  _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  date: Date,
  paid: { type: Boolean, default: false },
  paidDate: Date
});

mongoose.model('transactions', TransactionSchema);
