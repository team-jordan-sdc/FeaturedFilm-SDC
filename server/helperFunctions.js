const { LoremIpsum } = require('lorem-ipsum');
const { movies } = require('./movieList.js');

const bgPath = 'https://featurefilm.s3-us-west-2.amazonaws.com/bg/wudu-background-';

const featurePath = 'https://featurefilm.s3-us-west-2.amazonaws.com/f/wudu-feature-';
const tagsArray = ['comedy', 'horror', 'drama', 'holiday special', 'action', 'adventure', 'scifi', 'fantasy', 'thriller', 'animated'];
const mpaaRatings = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Unrated'];
const movieNamesArray = movies.split('\n');
const getRandomNumberTo6 = function () {
  return Math.floor(Math.random() * 6) + 1;
};
const getRandomNumberTo10 = function () {
  return Math.floor(Math.random() * 10) + 1;
};
const getRandomNumberTo100 = function () {
  return Math.floor(Math.random() * 100) + 1;
};
const getRandomNumberTo200 = function () {
  return Math.floor(Math.random() * 200) + 1;
};
const getRandomNumberTo500 = function () {
  return Math.floor(Math.random() * 500) + 1;
};
const getRandomNumberTo2000 = function () {
  return Math.floor(Math.random() * 2000) + 1;
};
const getRandomNumberTo5000 = function () {
  return Math.floor(Math.random() * 5000) + 1;
};
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

module.exports = {
  bgPath,
  featurePath,
  movies,
  tagsArray,
  mpaaRatings,
  movieNamesArray,
  getRandomNumberTo6,
  getRandomNumberTo10,
  getRandomNumberTo100,
  getRandomNumberTo200,
  getRandomNumberTo500,
  getRandomNumberTo2000,
  getRandomNumberTo5000,
  lorem,
};
