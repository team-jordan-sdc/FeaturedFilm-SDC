const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./database.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).end();
});

app.get('/api/featured', (req, res) => {
  // set to 1 for now
  db.getFeaturedFilmById(1, (err, result) => {
    res.status(200).send(result);
  });
});

app.post('/api/rate', (req, res) => {
  // console.log(req.body);
  res.status(200).end();
});

app.post('/api/wishlist', (req, res) => {
  // console.log('test wishlist');
  res.status(200).end();
});

module.exports = app;
