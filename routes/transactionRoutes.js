const rp = require('request-promise');
const mongoose = require('mongoose');
const Transaction = mongoose.model('transactions');
const Customer = mongoose.model('customers');

module.exports = app => {
  app.get('/api/currency/:currencyId', (req, res) => {
    // Note that a trailing slash is required for the API endpoint to work
    const requestUrl = `https://api.coinmarketcap.com/v1/ticker/${
      req.params.currencyId
    }/`;

    rp
      .get(requestUrl)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  app.post('/api/customers/new', async (req, res) => {
    try {
      if (!req.body._id) {
        req.body._id = new mongoose.mongo.ObjectID();
        console.log('over here', req.body);
      }

      const customerRecord = await Customer.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        {
          new: true,
          upsert: true
        }
      );
      res.status(200).send(customerRecord);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/transactions', async (req, res) => {
    const transaction = new Transaction({
      productID: 1234,
      variantID: 2234,
      totalPriceUSD: 3334,
      currency: [
        {
          name: 'raiblocks',
          conversionRateUSD: 0.2,
          conversionRateDate: Date.now()
        }
      ],
      totalPriceCurrency: 2343,
      date: Date.now(),
      paid: false
    });

    try {
      await customer.save();
      await transaction.save();
      res.send({ success: 'true' });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
