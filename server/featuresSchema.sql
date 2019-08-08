DROP DATABASE IF EXISTS feature;

CREATE DATABASE feature;

\c feature;

DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS titles;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS mpaaratings;
DROP TABLE IF EXISTS fpath;
DROP TABLE IF EXISTS bgPath;

CREATE TABLE titles(
  id serial PRIMARY KEY,
  title VARCHAR(100)
);

CREATE TABLE categories(
  id serial PRIMARY KEY,
  category VARCHAR(20)
);

CREATE TABLE mpaaratings(
  id serial PRIMARY KEY,
  rating VARCHAR(10)
);

CREATE TABLE bgpath(
  id serial PRIMARY KEY,
  bgurl VARCHAR(75)
);

CREATE TABLE fpath(
  id serial PRIMARY KEY,
  featureurl VARCHAR(75)
);

CREATE TABLE features(
  id serial PRIMARY KEY,
  title int REFERENCES titles,
  category_1 int REFERENCES categories,
  category_2 int REFERENCES categories,
  release_date integer,
  mpaa_rating int REFERENCES mpaaratings,
  length integer,
  star_rating integer,
  star_rating_count integer,
  rt_rating integer,
  description VARCHAR(700),
  hd_rent integer,
  sd_rent integer,
  hs_cost integer,
  sd_cost integer,
  movie_shot_url int REFERENCES bgPath,
  movie_cover_url int REFERENCES fpath
);

--psql -U postgres -f featuresSchema.sql
