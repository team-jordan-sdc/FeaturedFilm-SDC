const mongoose = require('mongoose');

const { Schema } = mongoose;
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.MONGOHOST}:${process.env.MONGOPORT}}/${process.env.MONGODB}`, { useNewUrlParser: true });

const featureSchema = new Schema({
  id: Number,
  title: String,
  category_1: String,
  category_2: String,
  release_date: Number,
  mpaa_rating: Number,
  length: Number,
  star_rating: Number,
  star_rating_count: Number,
  rt_rating: Number,
  description: String,
  hd_rent: Number,
  sd_rent: Number,
  hs_cost: Number,
  sd_cost: Number,
  movie_shot_url: String,
  movie_cover_url: String,
});
const Features = mongoose.model('Features', featureSchema);

console.time('findOne');
Features.findOne({ id: 10000000 }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.timeEnd('findOne');
  }
});
