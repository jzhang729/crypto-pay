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
  coinSymbol,
  _id,
  date
) => {
  transport.messages().send(
    {
      from: 'Headphones.com <info@premiumsound.com>',
      to: email,
      bcc: 'info@headphones.com',
      subject: `Headphones.com - Crypto Pay - Order: ${_id}`,
      html: `
          <div>\
            <p>Hi ${firstName},</p>\
            <p>Thanks for your interest in buying the ${productTitle} in ${coinName} (${coinSymbol}).</p>\
            <p>Please send your payment to the following wallet address:</p>\
            <p><blockquote>${process.env.RAIBLOCKS_WALLET}</blockquote></p>\
            <p>This transaction must be received within 30 minutes of <strong>${date}</strong> to be valid.</p>
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
