const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PG,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const searchTableQuery = 'select (title, category_1, description) from psqlFeatures where id=10000000;';

const psqlEndQuery = function () {
  console.time('endQuery');
  pool.query(searchTableQuery)
  .then((results) => console.log(results))
    .then(() => console.timeEnd('endQuery'))
    .catch(err => console.log(err));
};

psqlEndQuery();
