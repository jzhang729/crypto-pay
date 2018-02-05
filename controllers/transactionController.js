const mongoose = require('mongoose');
const Transaction = mongoose.model('transactions');
const Customer = mongoose.model('customers');
const { sendEmail } = require('../services/mail');

exports.saveCustomer = async (req, res, next) => {
  if (!req.body.customer._id) {
    req.body.customer._id = new mongoose.mongo.ObjectID();
  }

  const customerRecord = new Customer(req.body.customer);

  try {
    await customerRecord.save();
    req.body.customerRecord = customerRecord;
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
  const { firstName, lastName, email } = req.body.customerRecord;

  const {
    _id,
    productTitle,
    variantTitle,
    currency: { coinName, coinSymbol },
    priceInCrypto,
    date
  } = req.body.transactionRecord;

  try {
    const args = {
      variantTitle,
      email,
      firstName,
      lastName,
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
