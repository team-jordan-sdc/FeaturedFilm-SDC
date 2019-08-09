require('dotenv').config();

const { Pool } = require('pg');
const helper = require('./helperfunctions.js');
const pgp = require('pg-promise')({ capSQL: true });

const db = pgp({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PG,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const cs = new pgp.helpers.ColumnSet(['title',
  'category_1',
  'category_2',
  'release_date',
  'mpaa_rating',
  'length',
  'star_rating',
  'star_rating_count',
  'rt_rating',
  'description',
  'hd_rent',
  'sd_rent',
  'hs_cost',
  'sd_cost',
  'movie_shot_url',
  'movie_cover_url'], { table: 'features' });

const dropDatabaseQuery = `
  DROP DATABASE IF EXISTS feature;
`;

const createDatabaseQuery = `
  CREATE DATABASE FEATURE;
`;

const createTableQuery = `CREATE TABLE features (
  id serial PRIMARY KEY,
  title VARCHAR (100),
  category_1 VARCHAR(30),
  category_2 VARCHAR(30),
  release_date integer,
  mpaa_rating VARCHAR(15),
  length integer,
  star_rating integer,
  star_rating_count integer,
  rt_rating integer,
  description VARCHAR(700),
  hd_rent integer,
  sd_rent integer,
  hs_cost integer,
  sd_cost integer,
  movie_shot_url VARCHAR(100),
  movie_cover_url VARCHAR(100)
)`;

const dropTableQuery = `
  DROP TABLE IF EXISTS features;
`;

const createObject = function () {
  return {
    title: helper.movieNamesArray[Math.floor(Math.random() * helper.movieNamesArray.length)],
    category_1: helper.tagsArray[Math.floor(Math.random() * helper.tagsArray.length)],
    category_2: helper.tagsArray[Math.floor(Math.random() * helper.tagsArray.length)],
    release_date: 1930 + Math.floor(Math.random() * 90),
    mpaa_rating: helper.mpaaRatings[Math.floor(Math.random() * helper.mpaaRatings.length)],
    length: helper.getRandomNumberTo200(),
    star_rating: helper.getRandomNumberTo500(),
    star_rating_count: helper.getRandomNumberTo5000(),
    rt_rating: helper.getRandomNumberTo100(),
    description: helper.lorem.generateParagraphs(1),
    hd_rent: helper.getRandomNumberTo2000(),
    sd_rent: helper.getRandomNumberTo2000(),
    hs_cost: helper.getRandomNumberTo2000(),
    sd_cost: helper.getRandomNumberTo2000(),
    movie_shot_url: `${`${helper.bgPath + helper.getRandomNumberTo500()}.jpg`}`,
    movie_cover_url: `${`${helper.featurePath + helper.getRandomNumberTo500()}.jpg`}`,
  };
};

async function insertObjects() {
  let objectsArray = [];
  const insertCount = 0;
  for (let i = 0; i < 10000000; i += 1) {
    objectsArray.push(createObject());
    if (objectsArray.length === 10000) {
      console.log(i);
      await db.none(pgp.helpers.insert(objectsArray, cs));
      objectsArray = [];
    }
  }
}

db.any(dropTableQuery)
  .then(() => db.any(dropDatabaseQuery))
  .then(() => db.any(createDatabaseQuery))
  .then(() => db.any(createTableQuery))
  .then(() => console.time('insertion'))
  .then(() => insertObjects())
  .then(() => console.timeEnd('insertion'))
  .catch(err => console.log(err));
