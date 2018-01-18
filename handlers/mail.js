const nodemailer = require('nodemailer');
const mailgun = require("mailgun-js");
const htmlToText = require('html-to-text');
const juice = require('juice');

// const transport = nodemailer.createTransport({
//   host: "smtp.mailgun.io",
//   port: 2525,
//   auth: {
//     user: "7bc78ea2bfab4a",
//     pass: "5281535b665e36"
//   }
// });

const transport = mailgun({
  apiKey: process.env.MG_API_KEY,
  domain: 'premiumsound.com'
});


exports.send = (email) => {
  transport.messages().send({
    from: 'Headphones.com <info@premiumsound.com>',
    to: email,
    subject: 'Headphones.com Purchase Details',
    text: 'Hey I am testing this out'
  }, (error, body) => {
    if (error) { return console.log(error); }
    console.log(body);
  });
};

// exports.send = (email) => {
//   transport.sendMail({
//     from: 'Headphones.com <info@headphones.com>',
//     to: email,
//     subject: 'Headphones.com Purchase Details',
//     html: 'Hey I am <strong>testing</strong> this out',
//     text: 'Hey I am testing this out'
//   }, (err, info) => {
//     if (err) { return console.log(err); }
//     console.log(info);
//   });
// }
