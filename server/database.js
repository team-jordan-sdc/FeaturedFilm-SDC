const mysql = require('mysql');
require('dotenv').config();

const loginInfo = {
  host: 'mycoolsql',
  port: '3306',
  user: 'root',
  password: 'MattM',
  database: 'featurefilm',
};

const connection = mysql.createConnection(loginInfo);

// create
const createFeaturedFilm = (params) => {
  const createQuery = `INSERT INTO Features (
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
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return new Promise((resolve, reject) => {
    connection.query(createQuery, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
// read
const getFeaturedFilmById = (id) => {
  const readQuery = `SELECT * FROM Features WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(readQuery, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// update
const updateFeaturedFilm = (params) => {
  const updateQuery = 'UPDATE Features SET ?? = ? Where id = ?;';
  return new Promise((resolve, reject) => {
    connection.query(updateQuery, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
// delete
const removeFeaturedFilm = (id) => {
  const removeQuery = `Delete from Features where id=${id};`;
  return new Promise((resolve, reject) => {
    connection.query(removeQuery, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  createFeaturedFilm,
  getFeaturedFilmById,
  updateFeaturedFilm,
  removeFeaturedFilm,
};
