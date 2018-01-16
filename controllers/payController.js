exports.homePage = (req, res) => {
  res.render('index');
};

exports.pay = (req, res) => {
  res.render('pay', {
    title: 'Crypto Pay',
    message: `Hey, thanks for your interest in paying for Product (ID: ${
      req.params.id
    }) with crypo`
  });
};
