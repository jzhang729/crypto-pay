const payController = require('../controllers/payController');

const rp = require('request-promise');
const shopApiKey = process.env.SHOP_API_KEY;
const shopApiPassword = process.env.SHOP_API_PASSWORD;
const shopHost = process.env.SHOP_HOST;

module.exports = app => {
  app.get('/pay/:productID', (req, res) => {
    const productID = req.params.productID;
    const productApiRequestUrl = `https://${shopApiKey}:${shopApiPassword}@${shopHost}/admin/products/${productID}.json`;

    rp
      .get(productApiRequestUrl)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  app.post('/submit', payController.submit);
};
