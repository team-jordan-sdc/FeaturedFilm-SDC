const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./database.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/api/rand', (req, res) => {
  let randNum = Math.floor(Math.random() * 99) + 1;
  // console.log('index is: ' + randNum);
  db.getFeaturedFilmById(randNum, (err, result) => {
    res.status(200).send(result);
  });
});

app.get('/api/featured', (req, res) => {
  let index = req.body.index;
  db.getFeaturedFilmById(index, (err, result) => {
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
