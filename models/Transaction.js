const mongoose = require('mongoose');
const CurrencySchema = require('./Currency');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  productTitle: String,
  productId: Number,
  variantTitle: String,
  variantId: Number,
  currency: CurrencySchema,
  variantPriceUSD: String,
  priceInCrypto: String,
  _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  date: Date,
  sentEmail: { type: Boolean, default: false }
});

mongoose.model('transactions', TransactionSchema);
