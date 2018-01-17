const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const pug = require('pug');
const dotenv = require('dotenv').config();
const errorHandlers = require('./handlers/errorHandlers');
const routes = require('./routes/index');

const app = express();
app.use(bodyParser.json());

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(errorHandlers.notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
