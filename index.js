const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const dotenv = require('dotenv').config();
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/payRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html if it does not recognize the route
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
