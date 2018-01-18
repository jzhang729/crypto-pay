const rp = require('request-promise');
const mail = require('../handlers/mail');
const shopApiKey = process.env.SHOP_API_KEY;
const shopApiPassword = process.env.SHOP_API_PASSWORD;
const shopHost = process.env.SHOP_HOST;

exports.pay = (req, res) => {
  const productID = req.params.productID;
  const productApiRequestUrl = `https://${shopApiKey}:${shopApiPassword}@${shopHost}/admin/products/${productID}.json`;

  rp
    .get(productApiRequestUrl)
    .then(data => {
      // res.setHeader('Content-Type', 'application/liquid');

      res.render('pay', {
        data: JSON.parse(data).product
      });
    })
    .catch(err => {
      console.log(err);

      res.render('pay', {
        title: 'Crypto Pay',
        message: `Hey, thanks for your interest in paying for Product (ID: ${productID}) with crypo`,
        data:
          "Unfortunately we couldn't find the product that you are trying to pay for."
      });
    });
};

exports.submit = (req, res) => {
  const fields = ({
    name,
    email,
    currency,
    product,
    address1,
    address2,
    city,
    state,
    country
  } = req.body);
  mail.send(fields);
  res.render('emailConfirmation', {
    fields
  });
};
