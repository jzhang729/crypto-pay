const PORT = process.env.PORT || 5000;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html if it does not recognize the route
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
