const request = require('request-promise');

exports.pay = (req, res) => {
  request.get('https://shopify-crypto-pay.herokuapp.com/admin/products.json')
    .then(data => { console.log(data); })
    .catch(err => { console.log(err); });


  res.render('pay', {
    title: 'Crypto Pay',
    message: `Hey, thanks for your interest in paying for Product (ID: ${
      req.params.id
    }) with crypo`
  });
};
