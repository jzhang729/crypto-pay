const mongoose = require('mongoose');
const CurrencySchema = require('./Currency');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  productID: Number,
  variantID: Number,
  totalPriceUSD: Number,
  currency: [CurrencySchema],
  totalPriceCurrency: Number,
  _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  date: Date,
  paid: { type: Boolean, default: false },
  paidDate: Date
});

mongoose.model('transactions', TransactionSchema);
