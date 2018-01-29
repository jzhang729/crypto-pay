const mongoose = require('mongoose');
const Transaction = mongoose.model('transactions');
const Customer = mongoose.model('customers');
const { sendEmail } = require('../handlers/mail');

exports.saveCustomer = async (req, res) => {
  try {
    if (!req.body._id) {
      req.body._id = new mongoose.mongo.ObjectID();
    }

    const customerRecord = await Customer.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
        upsert: true
        // setDefaultsOnInsert: true
      }
    );

    res.status(200).send(customerRecord);
  } catch (err) {
    res.status(422).send(err);
  }
};

exports.saveTransaction = async (req, res, next) => {
  const {
    productId,
    productTitle,
    variantId,
    variantTitle,
    variantPriceUSD,
    currency: { coinName, coinSymbol, coinPriceUSD, coinLastUpdated },
    _customer,
    priceInCrypto
  } = req.body;

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
    res.send(err);
  }

  next();
};

exports.updateCustomer = async (req, res, next) => {
  const { _customer, transactionRecord } = req.body;

  const customerUpdate = Customer.updateOne(
    { _id: _customer },
    { $push: { transactions: transactionRecord._id } }
  );

  try {
    await customerUpdate.exec();
  } catch (err) {
    res.send(err);
  }

  next();
};

exports.sendMail = async (req, res, next) => {
  const { _customer, transactionRecord } = req.body;

  try {
    const customerRecord = await Customer.findOne({ _id: _customer });
    const { firstName, lastName, email } = customerRecord;

    const {
      _id,
      productTitle,
      currency: { coinName, coinSymbol },
      date
    } = transactionRecord;

    sendEmail(
      firstName,
      lastName,
      email,
      productTitle,
      coinName,
      coinSymbol,
      _id,
      date
    );
  } catch (err) {
    console.log(err);
    res.send(err);
  }

  next();
};
