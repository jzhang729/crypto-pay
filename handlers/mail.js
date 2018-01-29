const transport = require('mailgun-js')({
  apiKey: process.env.MG_API_SECRET,
  // domain: 'mg.premiumsound.com'
  domain: 'sandbox2dfbe3a4b772492dab3d705cc07dd57c.mailgun.org'
});

exports.sendEmail = (
  firstName,
  lastName,
  email,
  productTitle,
  variantTitle,
  coinName,
  coinSymbol,
  _id,
  date,
  priceInCrypto
) => {
  if (variantTitle === 'Default Title') {
    variantTitle = '';
  }

  transport.messages().send(
    {
      from: 'Headphones.com <info@headphones.com>',
      to: email,
      bcc: 'jordan@headphones.com',
      subject: `Headphones.com - Crypto Pay`,
      html: `
          <div>\
            <p>Hi ${firstName},</p>\
            <p>Thanks for your interest in buying the ${productTitle} in ${coinName} (${coinSymbol}).</p>\
            <p>Please send your payment of <strong>${priceInCrypto} ${coinSymbol}</strong> to the following wallet address:</p>\
            <p><blockquote style="margin: 15px;">${
              process.env.RAIBLOCKS_WALLET
            }</blockquote></p>\
            <p>This transaction must be received within 30 minutes of <strong>${date}</strong> to be valid.</p>\
            <p><em>If you need to contact us in reference to this order, you can reference this order number as: ${_id}.</em></p>\
            <div style="text-align: center; margin: 0 auto; display: block; width: 75%; background-color: #EEEEEE">\
              <h4>Headphones.com</h4>\
              <p>Email: <a href="mailto:info@headphones.com">info@headphones.com</a></p>\
              <p>Phone: <a href="tel:18004383191">1-800-438-3191</a></p>\
            </div>\
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
