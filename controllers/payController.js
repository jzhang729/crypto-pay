const mail = require('../handlers/mail');

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
