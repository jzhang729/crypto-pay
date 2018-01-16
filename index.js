const express = require('express');
const bodyParser = require('body-parser');
const shopifyApi = require('shopify-api-node');
const http = require('http');
const pug = require('pug');

const app = express();

app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send({ Hello: 'World' });
});

app.get('/:id', (req, res) => {
  res.render('pay', {
    title: 'Crypto Pay',
    message: 'Hey, thanks for your interest in paying with crypo'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
