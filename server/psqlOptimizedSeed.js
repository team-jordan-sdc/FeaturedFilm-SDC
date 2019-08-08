require('dotenv').config();
const helper = require('./helperfunctions.js');
const pgp = require('pg-promise')({ capSQL: true });

const db = pgp({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PG,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const errorMessage = 'An error during seeding has ocurred. Ensure the schema has been run and a dotenv file has been configured.';

const indexTableQuery = `
  CREATE INDEX findex ON features(id);
`;

const csMain = new pgp.helpers.ColumnSet([
  'title',
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

const csTitles = new pgp.helpers.ColumnSet([
  'title',
], { table: 'titles' });

const csCategories = new pgp.helpers.ColumnSet([
  'category',
], { table: 'categories' });

const csMpaaRatings = new pgp.helpers.ColumnSet([
  'rating',
], { table: 'mpaaratings' });

const csBgPath = new pgp.helpers.ColumnSet([
  'bgurl',
], { table: 'bgpath' });

const csFPath = new pgp.helpers.ColumnSet([
  'featureurl',
], { table: 'fpath' });

const createTitleObject = function (j) {
  return {
    title: helper.movieNamesArray[j],
  };
};

const createCategoryObject = function (k) {
  return {
    category: helper.tagsArray[k],
  };
};
const createRatingsObject = function (l) {
  return {
    rating: helper.mpaaRatings[l],
  };
};
const createFeaturePathObject = function (m) {
  return {
    featureurl: `${helper.featurePath}${m}.jpg`,
  };
};
const CreateBgPathObject = function (n) {
  return {
    bgurl: `${helper.bgPath}${n}.jpg`,
  };
};

const createObject = function () {
  return {
    title: helper.getRandomNumberTo100(),
    category_1: helper.getRandomNumberTo10(),
    category_2: helper.getRandomNumberTo10(),
    release_date: 1930 + Math.floor(Math.random() * 90),
    mpaa_rating: helper.getRandomNumberTo6(),
    length: helper.getRandomNumberTo200(),
    star_rating: helper.getRandomNumberTo500(),
    star_rating_count: helper.getRandomNumberTo5000(),
    rt_rating: helper.getRandomNumberTo100(),
    description: helper.lorem.generateParagraphs(1),
    hd_rent: helper.getRandomNumberTo2000(),
    sd_rent: helper.getRandomNumberTo2000(),
    hs_cost: helper.getRandomNumberTo2000(),
    sd_cost: helper.getRandomNumberTo2000(),
    movie_shot_url: helper.getRandomNumberTo500(),
    movie_cover_url: helper.getRandomNumberTo500(),
  };
};

async function insertObjects() {
  return db.tx('massive-insert', t => t.sequence((index, data) => getData(index)
    .then((data) => {
      if (data.length) {
        console.log(index);
        return t.none(pgp.helpers.insert(data, csMain));
      }
    })));
}

async function insertTitleObjects() {
  const titleObjects = [];
  for (let j = 0; j < 100; j += 1) {
    titleObjects.push(createTitleObject(j));
    if (titleObjects.length === 100) {
      console.log('titles');
      await db.none(pgp.helpers.insert(titleObjects, csTitles));
    }
  }
}

async function insertCategoryObjects() {
  const categoryObjects = [];
  for (let k = 0; k < 10; k += 1) {
    categoryObjects.push(createCategoryObject(k));
    if (categoryObjects.length === 10) {
      console.log('categories');
      await db.none(pgp.helpers.insert(categoryObjects, csCategories));
    }
  }
}
async function insertRatingsObject() {
  const ratingsObjects = [];
  for (let l = 0; l < 6; l += 1) {
    ratingsObjects.push(createRatingsObject(l));
    if (ratingsObjects.length === 6) {
      console.log('ratings');
      await db.none(pgp.helpers.insert(ratingsObjects, csMpaaRatings));
    }
  }
}
async function insertfurlObject() {
  const fUrlObjects = [];
  for (let m = 1; m < 501; m += 1) {
    fUrlObjects.push(createFeaturePathObject(m));
    if (fUrlObjects.length === 500) {
      console.log('furls');
      await db.none(pgp.helpers.insert(fUrlObjects, csFPath));
    }
  }
}

async function insertbgurlObject() {
  const bgUrlObjects = [];
  for (let n = 1; n < 501; n += 1) {
    bgUrlObjects.push(CreateBgPathObject(n));
    if (bgUrlObjects.length === 500) {
      console.log('bgurls');
      await db.none(pgp.helpers.insert(bgUrlObjects, csBgPath));
    }
  }
}
async function source(index) {
  const data = await getData(index);
}
async function getData(index) {
  const data = [];
  if (index < 20000) {
    // generate 10000
    for (let h = 0; h < 500; h++) {
      data.push(createObject());
    }
    return data;
  }
  return [];
}

db.connect()
  .then(() => console.time('subtables'))
  .then(() => insertTitleObjects())
  .then(() => insertCategoryObjects())
  .then(() => insertRatingsObject())
  .then(() => insertfurlObject())
  .then(() => insertbgurlObject())
  .then(() => console.timeEnd('subtables'))
  .then(() => console.time('insertion'))
  .then(() => insertObjects())
  .then(() => console.timeEnd('insertion'))
  .then(() => db.any(indexTableQuery))
  .then(() => process.exit(1))
  .catch((err) => {
    console.log(errorMessage);
    console.log(err);
    process.exit(1);
  });
