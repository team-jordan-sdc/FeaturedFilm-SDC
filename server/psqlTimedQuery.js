const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const searchTableQuery = `EXPLAIN ANALYZE SELECT
category1.category as category1,
category2.category as category2,
features.length,
features.star_rating,
features.release_date,
features.star_rating_count,
features.rt_rating,
features.description,
features.hd_rent,
features.hs_cost,
features.sd_cost,
features.movie_shot_url,
features.movie_cover_url,
titles.title,
mpaaratings.rating,
bgpath.bgurl,
fpath.featureurl
FROM features
LEFT JOIN titles ON
features.title=titles.id
LEFT JOIN categories AS category1 ON
features.category_1=category1.id
LEFT JOIN categories AS category2 ON
features.category_2=category2.id
LEFT JOIN mpaaratings ON
features.mpaa_rating=mpaaratings.id
LEFT JOIN bgpath ON
features.movie_cover_url=bgpath.id
LEFT JOIN fpath ON
features.movie_shot_url=fpath.id
WHERE features.id = 10000000`;

const psqlEndQuery = function () {
  pool.query(searchTableQuery)
    .then(results => console.log(results))
    .catch(err => console.log(err));
};

psqlEndQuery();
