const mysql = require('mysql');
const Promise = require('bluebird');
const { LoremIpsum } = require('lorem-ipsum');
const { movies } = require('./movieList.js');
const database = 'featurefilm';
const helper = require('./helperfunctions.js');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_host,
  port: process.env.DB_port,
  user: process.env.DB_user,
  password: process.env.DB_password,
});

const createRow = function () {
  return [
    `${helper.movieNamesArray[Math.floor(Math.random() * helper.movieNamesArray.length)]}`,
    `${helper.tagsArray[Math.floor(Math.random() * helper.tagsArray.length)]}`,
    `${helper.tagsArray[Math.floor(Math.random() * helper.tagsArray.length)]}`,
    1930 + Math.floor(Math.random() * 90),
    `${helper.mpaaRatings[Math.floor(Math.random() * helper.mpaaRatings.length)]}`,
    helper.getRandomNumberTo200(),
    helper.getRandomNumberTo500(),
    helper.getRandomNumberTo5000(),
    helper.getRandomNumberTo100(),
    `${helper.lorem.generateParagraphs(1)}`,
    helper.getRandomNumberTo2000(),
    helper.getRandomNumberTo2000(),
    helper.getRandomNumberTo2000(),
    helper.getRandomNumberTo2000(),
    `${`${helper.bgPath + helper.getRandomNumberTo500()}.jpg`}`,
    `${`${helper.featurePath + helper.getRandomNumberTo500()}.jpg`}`,
  ];
};

async function bulkInsert(values) {
  return db.queryAsync(`
  INSERT INTO features (
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
  ) VALUES ?;
`, [values]);
}

async function insertValues() {
  let values = [];
  for (let i = 0; i < 10000000; i++) {
    values.push(createRow());
    if (values.length === 25000) {
      console.log(i);
      await bulkInsert(values);
      values = [];
    }
  }
}

connection.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${process.env.DB_database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${process.env.DB_database}`))
  .then(() => db.queryAsync(`USE ${process.env.DB_database}`))
  .then(() => db.queryAsync(`
    CREATE TABLE features (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR (100),
      category_1 VARCHAR(30),
      category_2 VARCHAR(30),
      release_date INT,
      mpaa_rating VARCHAR(15),
      length INT,
      star_rating INT,
      star_rating_count INT,
      rt_rating INT,
      description VARCHAR(700),
      hd_rent INT,
      sd_rent INT,
      hs_cost INT,
      sd_cost INT,
      movie_shot_url VARCHAR(100),
      movie_cover_url VARCHAR(100)
    )`))
  .then(() => console.time('seed'))
  .then(() => insertValues())
  .then(() => console.timeEnd('seed'))
  .catch(err => console.log('Seeding error:', err));
