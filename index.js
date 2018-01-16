const express = require('express');
const bodyParser = require('body-parser');
const shopifyApi = require('shopify-api-node');
const http = require('http');
const pug = require('pug');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send({ Hello: 'World' });
});

app.get('/:id', (req, res) => {
  res.render('pay');
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
