const transport = require('mailgun-js')({
  apiKey: process.env.MG_API_SECRET,
  domain: 'mg.premiumsound.com'
});

exports.sendEmail = (
  firstName,
  lastName,
  email,
  productTitle,
  coinName,
  coinSymbol
) => {
  transport.messages().send(
    {
      from: 'Crypto Pay <info@premiumsound.com>',
      to: email,
      subject: 'Customer wants to pay with Crypto!',
      html: `
          <div>\
            <p>Hi ${firstName},</p>\
            <p>Thanks for your interest in buying the ${productTitle} in ${coinName} (${coinSymbol}).</p>\
          </div>          
        `
    },
    (error, body) => {
      if (error) {
        return console.log(error);
      }
      console.log(body);
    }
  );
};
