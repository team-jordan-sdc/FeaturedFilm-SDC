require('newrelic');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const pool = require('./psqldb.js');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('*.js', (req, res, next) => {
  req.url += '.js';
  res.set('Content-Encoding', 'gzip');
  next();
});

// read-
app.get('/api/featured', (request, response) => {
  const { id } = request.query;
  const getQuery = 'SELECT * FROM features WHERE id = $1';
  pool
    .query(getQuery, [id], (error, results) => {
      if (error) {
        response.status(404).end();
      }
      response.status(200).json(results.rows).end();
    });
});

// create-
app.post('/api/featured', (request, response) => {
  const { film } = request.body;
  const createQuery = `INSERT INTO features(
    title,
    category_1,
    category_2,
    release_date,
    mpaa_rating,
    length,
    star_rating,
    star_rating_count,
    rt_rating,
    description,
    hd_rent,
    sd_rent,
    hs_cost,
    sd_cost,
    movie_shot_url,
    movie_cover_url
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
  pool.query(createQuery, film, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).json(results.rows).end();
  });
});

// update-
app.put('/api/featured', (request, response) => {
  const { film } = req.body;
  const updateQuery = 'UPDATE features SET $1 = $2 WHERE id = $3';
  pool
    .query(updateQuery, film, (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows).end();
    });
});

// delete-
app.delete('/api/featured', (request, response) => {
  const { id } = request.body;
  const deleteQuery = 'DELETE FROM features WHERE id = $1;';
  pool
    .query(deleteQuery, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.send(`Deletion successful at id ${id}`).status(405).json(results.rows).end();
    });
});

module.exports = app;
