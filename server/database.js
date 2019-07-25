const mysql = require('mysql');
require('dotenv').config();

const loginInfo = {
  host: process.env.DB_host,
  port: process.env.DB_port,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
};

const connection = mysql.createConnection(loginInfo);

// create
const createFeaturedFilm = (params) => {
  const createQuery = `INSERT INTO
    Features
      SET
      title = ?,
      category_1 = ?,
      category_2 = ?,
      release_date = ?,
      mpaa_rating = ?,
      length = ?,
      star_rating = ?,
      star_rating_count = ?,
      rt_rating = ?,
      description = ?,
      hd_rent = ?,
      sd_rent = ?,
      hs_cost = ?,
      sd_cost = ?,
      movie_shot_url = ?,
      movie_cover_url = ?
  `;
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
  const updateQuery = 'UPDATE Features SET ?? = ? WHERE id = ?;';
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
  const removeQuery = `DELETE FROM Features WHERE id=${id};`;
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
