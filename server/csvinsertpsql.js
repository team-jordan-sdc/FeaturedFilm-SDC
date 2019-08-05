require('dotenv').config();
const { Pool } = require('pg');

const writeError = 'An error during insertion has ocurred. Please check relative paths read/write permissions and ensure dotenv config is configured properly.';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PG,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const createTableQuery = `CREATE TABLE psqlFeatures (
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
DROP TABLE IF EXISTS psqlFeatures;
`;

const copyTableQuery = `
\copy psqlFeatures ( title,category_1,category_2,release_date,mpaa_rating,length,star_rating,star_rating_count,rt_rating,description,hd_rent,sd_rent,hs_cost,sd_cost,movie_shot_url,movie_cover_url ) FROM '${process.env.CSVD}' WITH DELIMITER ',' CSV HEADER;
`;

pool.query(dropTableQuery)
  .then(() => pool.query(createTableQuery))
  .then(() => console.time('copy'))
  .then(() => pool.query(copyTableQuery))
  .then(() => console.timeEnd('copy'))
  .catch((error) => {
    console.log(writeError);
    console.log(error);
    process.exit(1);
  });
