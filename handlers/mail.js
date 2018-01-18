const htmlToText = require('html-to-text');
const juice = require('juice');

const transport = require('mailgun-js')({
  apiKey: process.env.MG_API_SECRET,
  domain: 'mg.premiumsound.com'
});

exports.send = ({ fields }) => {
  transport.messages().send({
    from: 'Crypto Pay <info@premiumsound.com>',
    to: process.env.MG_MAIL_RECIPIENTS,
    subject: 'Customer wants to pay with Crypto!',
    text: `${name} at ${email} is interested in buying the ${product} with ${currency}. Please calculate the cost of shipping and then send them the wallet address of ${process.env.RAIBLOCKS_WALLET} and total amount due.`
  }, (error, body) => {
    if (error) { return console.log(error); }
    console.log(body);
  });
};
