const htmlToText = require('html-to-text');
const juice = require('juice');

const transport = require('mailgun-js')({
  apiKey: process.env.MG_API_SECRET,
  domain: 'mg.premiumsound.com'
});

exports.send = ({ fields }) => {
  transport.messages().send({
    from: 'Crypto Pay <info@premiumsound.com>',
    to: 'jordan@headphones.com, taron@headphones.com',
    subject: 'Customer wants to pay with Crypto!',
    text: `${name} at ${email} is interested in buying the ${product} with ${currency}. Please calculate the cost of shipping and then send them the wallet address and total amount due.`
  }, (error, body) => {
    if (error) { return console.log(error); }
    console.log(body);
  });
};
