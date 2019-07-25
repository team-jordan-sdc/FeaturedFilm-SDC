const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./database.js');


const app = express();
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/api/rand', (req, res) => {
  const randNum = Math.floor(Math.random() * 99) + 1;
  db.getFeaturedFilmById(randNum, (err, result) => {
    res.status(200).send(result);
  });
});

// read-
app.get('/api/featured', (req, res) => {
  const { id } = req.query;
  db.getFeaturedFilmById(id)
    .then(result => res.send(result).status(201).end())
    .catch(error => console.log('An error occurred:', error));
});

// create
app.post('/api/featured', (req, res) => {
  const film = req.body.filmInfo;
  db.createFeaturedFilm(film)
    .then(result => res.send(result).status(201).end())
    .catch(error => console.log('An error occurred:', error));
});

// update
app.put('/api/featured', (req, res) => {
  const film = req.body.filmInfo;
  db.updateFeaturedFilm(film)
    .then(result => res.send(result).status(405).end())
    .catch(error => console.log('An error occurred:', error));
});

// delete
app.delete('/api/featured', (req, res) => {
  const { id } = req.body;
  db.removeFeaturedFilm(id)
    .then(result => res.send(result).status(405).end())
    .catch(error => console.log('An error occurred:', error));
});


module.exports = app;
