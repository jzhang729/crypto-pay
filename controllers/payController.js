const rp = require('request-promise');
const shopApiKey = process.env.SHOP_API_KEY;
const shopApiPassword = process.env.SHOP_API_PASSWORD;
const shopHost = process.env.SHOP_HOST;

exports.pay = (req, res) => {
  const productID = req.params.productID;
  const productApiRequestUrl = `https://${shopApiKey}:${shopApiPassword}@${shopHost}/admin/products/${productID}.json`;

  rp
    .get(productApiRequestUrl)
    .then(data => {
      res.render('pay', {
        title: 'Crypto Pay',
        message: `Hey, thanks for your interest in paying for Product (ID: ${productID}) with crypo`,
        data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
