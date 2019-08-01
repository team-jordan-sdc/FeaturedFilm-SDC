const fs = require('fs');
const csvWriter = require('csv-write-stream');
const helper = require('./helperfunctions.js');

const writer = csvWriter();

const writePsqlCSV = async function () {
  console.time('writepsql');
  writer.pipe(fs.createWriteStream('./server/psqlFeatures.csv'));
  for (let i = 0; i < 10000000; i++) {
    if (i % 1000000 === 0) {
      console.log(i);
    }
    if (!writer.write({
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
    })) {
      await new Promise(resolve => writer.once('drain', resolve));
    }
  }
  writer.end();
  console.timeEnd('writepsql');
};
writePsqlCSV();
