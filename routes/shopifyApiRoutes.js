const rp = require('request-promise');
const shopApiKey = process.env.SHOP_API_KEY;
const shopApiPassword = process.env.SHOP_API_PASSWORD;
const shopHost = process.env.SHOP_HOST;
const baseURI = `https://${shopApiKey}:${shopApiPassword}@${shopHost}`;

module.exports = app => {
  app.get('/api/product/:productId', (req, res) => {
    const productId = req.params.productId;
    const requestUrl = `${baseURI}/admin/products/${productId}.json`;

    rp
      .get(requestUrl)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(422).send(err);
      });
  });

  app.get('/api/variants/:variantId', (req, res) => {
    const requestUrl = `${baseURI}/admin/variants/${req.params.variantId}.json`;

    rp
      .get(requestUrl)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(422).send(err));
  });

  // app.get('/api/countries/', (req, res) => {
  //   const requestUrl = `${baseURI}/admin/countries.json`;
  //   rp
  //     .get(requestUrl)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => res.send(err));
  // });
};
