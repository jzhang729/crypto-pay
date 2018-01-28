const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: 'You must supply an email' },
  address1: String,
  address2: String,
  city: { type: String, required: 'You must supply a city.' },
  stateProv: String,
  country: String,
  postalZip: String,
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
});

mongoose.model('customers', CustomerSchema);
