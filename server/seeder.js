const mysql = require('mysql');
const Promise = require('bluebird');
const { LoremIpsum } = require('lorem-ipsum');
const { movies } = require('./movieList.js');


const database = 'featurefilm';
const connection = mysql.createConnection({
  user: 'root',
  password: '',
});

const bgPath = 'https://fec1-arwen-featuredfilms.s3-us-west-2.amazonaws.com/mudoo+backgrounds/';
const featurePath ='https://fec1-arwen-featuredfilms.s3-us-west-2.amazonaws.com/mudoo+posters/';
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

db.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => db.queryAsync(`
    CREATE TABLE Features (
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
  .then(() => db.queryAsync(`
    CREATE TABLE Wishlist (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      film_name VARCHAR(20)
  )`))
  .then(() => {
    for (let x = 0; x < 100; x += 1) {
      let movieId = Math.floor(Math.random() * 4) +1;
      db.queryAsync(`INSERT INTO Features (
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
      ) VALUES (
        '${movieNamesArray[Math.floor(Math.random() * movieNamesArray.length) - 1]}',
        '${tagsArray[Math.floor(Math.random() * tagsArray.length) - 1]}',
        '${tagsArray[Math.floor(Math.random() * tagsArray.length) - 1]}',
        ${1930 + Math.floor(Math.random() * 90)},
        '${mpaaRatings[Math.floor(Math.random() * mpaaRatings.length) - 1]}',
        ${Math.floor(Math.random() * 200)},
        ${Math.random() * 5},
        ${Math.floor(Math.random() * 5000)},
        ${Math.floor(Math.random() * 100)},
        '${lorem.generateParagraphs(2)}',
        ${Math.floor(Math.random() * 2000)},
        ${Math.floor(Math.random() * 2000)},
        ${Math.floor(Math.random() * 2000)},
        ${Math.floor(Math.random() * 2000)},
        '${bgPath + movieId + '-1280a.jpg'}',
        '${featurePath + movieId + '-168.jpeg'}'
      )`);
    }
  });

module.exports = {
  movies,
  tagsArray,
  mpaaRatings,
  db,
};
