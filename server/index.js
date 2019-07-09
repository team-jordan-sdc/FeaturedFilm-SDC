const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/api/featured', (req, res) => {
  console.log(req.body);
  res.end()
});

app.post('/api/rate', (req, res) => {
  console.log(req.body);
  res.end();
});

app.post('/api/wishlist', (req, res) => {
  console.log('test wishlist');
  res.end();
});

module.exports = app;
