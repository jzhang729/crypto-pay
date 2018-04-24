const rp = require('request-promise');
const mongoose = require('mongoose');
const transactionController = require('../controllers/transactionController');

module.exports = app => {
  app.get('/api/currency/:currencyId', (req, res) => {
    // Note that a trailing slash is required for the API endpoint to work
    const requestUrl = `https://api.coinmarketcap.com/v1/ticker/${
      req.params.currencyId
    }/`;

    rp
      .get(requestUrl)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  app.post(
    '/api/transactions/new',
    transactionController.saveCustomer,
    transactionController.saveTransaction,
    transactionController.updateCustomer,
    transactionController.sendMail,
    (req, res) => {
      res.status(200).send({ success: 'true' });
    }
  );
};
