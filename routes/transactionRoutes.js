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

  app.post('/api/transactions', async (req, res) => {
    const customer = new Customer({
      firstName: 'Jordan',
      lastName: 'Zaaang',
      email: 'jz@sfdf.com',
      address1: '123 Fake St',
      address2: 'unit 1',
      city: 'Vancouver',
      stateProv: 'BC',
      country: 'Canada',
      postalZip: 'V43 443'
    });

    const transaction = new Transaction({
      productID: 1234,
      variantID: 2234,
      totalPriceUSD: 3334,
      currency: [
        {
          name: 'rayblocks',
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
