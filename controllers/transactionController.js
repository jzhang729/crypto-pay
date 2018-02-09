const mongoose = require('mongoose');
const Transaction = mongoose.model('transactions');
const Customer = mongoose.model('customers');
const { sendEmail } = require('../services/mail');

exports.saveCustomer = async (req, res, next) => {
  const customerQuery = Customer.findOneAndUpdate(
    { email: req.body.customer.email },
    req.body.customer,
    { upsert: true, new: true }
  );

  try {
    const customer = await customerQuery.exec();
    req.body.customerRecord = customer;
    next();
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
};

exports.saveTransaction = async (req, res, next) => {
  const { _id: _customer } = req.body.customerRecord;

  const {
    productId,
    productTitle,
    variantId,
    variantTitle,
    variantPriceUSD,
    currency: { coinName, coinSymbol, coinPriceUSD, coinLastUpdated },
    priceInCrypto
  } = req.body.transaction;

  const transactionRecord = new Transaction({
    productId,
    productTitle,
    variantId,
    variantTitle,
    variantPriceUSD,
    currency: {
      coinName,
      coinSymbol,
      coinPriceUSD,
      coinLastUpdated
    },
    _customer,
    priceInCrypto,
    date: Date.now()
  });

  try {
    await transactionRecord.save();
    req.body.transactionRecord = transactionRecord;
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }

  next();
};

exports.updateCustomer = async (req, res, next) => {
  const { _customer, _id } = req.body.transactionRecord;

  const customerUpdate = Customer.updateOne(
    { _id: _customer },
    { $push: { transactions: _id } }
  );

  try {
    await customerUpdate.exec();
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
  next();
};

exports.sendMail = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    address1,
    address2,
    city,
    stateProv,
    country,
    postalZip
  } = req.body.customerRecord;

  const {
    _id,
    productTitle,
    variantTitle,
    variantPriceUSD,
    currency: { coinName, coinSymbol },
    priceInCrypto,
    date
  } = req.body.transactionRecord;

  try {
    const args = {
      variantTitle,
      variantPriceUSD,
      email,
      firstName,
      lastName,
      address1,
      address2,
      city,
      stateProv,
      country,
      postalZip,
      productTitle,
      coinName,
      coinSymbol,
      _id,
      date,
      priceInCrypto
    };

    sendEmail(args);
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }

  next();
};
