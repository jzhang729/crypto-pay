const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ goodbye: 'there' });
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
