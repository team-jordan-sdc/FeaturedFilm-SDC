const mysql = require('mysql');
const Promise = require('bluebird');
const { LoremIpsum } = require('lorem-ipsum');
const { movies } = require('./movieList.js');
require('dotenv').config();

const database = 'featurefilm';
const connection = mysql.createConnection({
  host: process.env.DB_host,
  port: process.env.DB_port,
  user: process.env.DB_user,
  password: process.env.DB_password,
});

const bgPath = 'https://featurefilm.s3-us-west-2.amazonaws.com/bg/wudu-background-';
const featurePath = 'https://featurefilm.s3-us-west-2.amazonaws.com/f/wudu-feature-';
const db = Promise.promisifyAll(connection, { multiArgs: true });

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});

const movieNamesArray = movies.split('\n');

const tagsArray = ['comedy', 'horror', 'drama', 'holiday special', 'action', 'adventure', 'scifi', 'fantasy', 'thriller', 'animated'];
const mpaaRatings = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Unrated'];

const getRandomNumberTo100 = function () {
  return Math.floor(Math.random() * 100);
};
const getRandomNumberTo200 = function () {
  return Math.floor(Math.random() * 200) + 1;
};
const getRandomNumberTo500 = function () {
  return Math.floor(Math.random() * 500) + 1;
};
const getRandomNumberTo2000 = function () {
  return Math.floor(Math.random() * 2000);
};
const getRandomNumberTo5000 = function () {
  return Math.floor(Math.random() * 5000);
};

const createRow = function () {
  return [
    `${movieNamesArray[Math.floor(Math.random() * movieNamesArray.length)]}`,
    `${tagsArray[Math.floor(Math.random() * tagsArray.length)]}`,
    `${tagsArray[Math.floor(Math.random() * tagsArray.length)]}`,
    1930 + Math.floor(Math.random() * 90),
    `${mpaaRatings[Math.floor(Math.random() * mpaaRatings.length)]}`,
    getRandomNumberTo200(),
    getRandomNumberTo500(),
    getRandomNumberTo5000(),
    getRandomNumberTo100(),
    `${lorem.generateParagraphs(1)}`,
    getRandomNumberTo2000(),
    getRandomNumberTo2000(),
    getRandomNumberTo2000(),
    getRandomNumberTo2000(),
    `${`${bgPath + getRandomNumberTo500()}.jpg`}`,
    `${`${featurePath + getRandomNumberTo500()}.jpg`}`,
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
  for (let i = 0; i < 20000000; i++) {
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

module.exports = {
  movies,
  tagsArray,
  mpaaRatings,
  db,
};
