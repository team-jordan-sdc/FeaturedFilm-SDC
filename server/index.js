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

app.get('/api/featured', (request, response) => {
  const { id } = request.query;
  const getQuery = `
  SELECT
    category1.category as category1,
    category2.category as category2,
    titles.title,
    bgpath.bgurl,
    fpath.featureurl,
    mpaaratings.rating,
    features.description,
    features.length,
    features.release_date,
    features.rt_rating,
    features.star_rating,
    features.star_rating_count,
    features.hs_cost,
    features.hd_rent,
    features.sd_cost,
    features.sd_rent,
    features.movie_shot_url,
    features.movie_cover_url
    FROM features
    LEFT JOIN titles ON
    features.title=titles.id
    LEFT JOIN categories AS category1 ON
    features.category_1=category1.id
    LEFT JOIN categories AS category2 ON
    features.category_2=category2.id
    LEFT JOIN mpaaratings ON
    features.mpaa_rating=mpaaratings.id
    LEFT JOIN bgpath ON
    features.movie_cover_url=bgpath.id
    LEFT JOIN fpath ON
    features.movie_shot_url=fpath.id
    WHERE features.id = $1;
    `;
  pool
    .query(getQuery, [id], (error, results) => {
      if (error) {
        response.status(404).end();
      }
      response.status(200).json(results.rows).end();
    });
});

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
      response.status(422).end();
    }
    response.status(201).json(results.rows).end();
  });
});

app.put('/api/featured', (request, response) => {
  const { film } = request.body;
  const updateQuery = 'UPDATE features SET $1 = $2 WHERE id = $3';
  pool
    .query(updateQuery, film, (error, results) => {
      if (error) {
        response.status(404).end();
      }
      response.status(200).json(results.rows).end();
    });
});

app.delete('/api/featured', (request, response) => {
  const { id } = request.body;
  const deleteQuery = 'DELETE FROM features WHERE id = $1;';
  pool
    .query(deleteQuery, [id], (error, results) => {
      if (error) {
        response.status(404).end();
      }
      response.send(`Deletion successful at id ${id}`).status(405).json(results.rows).end();
    });
});

module.exports = app;
