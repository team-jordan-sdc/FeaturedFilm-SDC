const mysql = require('mysql');
const Promise = require ('bluebird');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const database = 'featurefilm'
const connection = mysql.createConnection({
  user: 'root',
  password: ''
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});


const movieNames = `The Shawshank Redemption
The Godfather
The Godfather, Part II
The Dark Knight
12 Angry Men
Schindlers List
Pulp Fiction
The Lord of the Rings: The Return of the King
The Good, the Bad, and the Ugly
Fight Club
The Lord of the Rings: The Fellowship of the Ring
Forrest Gump
Star Wars: Episode V: The Empire Strikes Back
Inception
The Lord of the Rings: The Two Towers
One Flew Over The Cuckoos Nest
GoodFellas
The Matrix
The Seven Samurai
Star Wars
City of God
Se7en
The Silence of the Lambs
Its A Wonderful Life
Life is Beautiful
The Usual Suspects
Leon, aka The Professional
Saving Private Ryan
Spirited Away
Coco
American History X
Interstellar
Once Upon a Time in the West
The Green Mile
Psycho
Casablanca
City Lights
Intouchables
Modern Times
The Pianist
Raiders of the Lost Ark
The Departed
Rear Window
Terminator 2: Judgment Day
Back to the Future
Whiplash
Gladiator
The Lion King
The Prestige
Memento
Apocalypse Now
Alien
The Great Dictator
Sunset Boulevard
Cinema Paradiso
Dr. Strangelove
The Lives of Others
Grave of the Fireflies
Paths of Glory
Django Unchained
The Shining
WALL-E
American Beauty
Princess Mononoke
The Dark Knight Rises
Blade Runner 2049
Oldboy
Witness For the Prosecution
Aliens
Once Upon a Time in America
Das Boot
Dangal
Citizen Kane
Vertigo
North By Northwest
Star Wars: Episode VI - Return of the Jedi
Braveheart
Reservoir Dogs
M
Requiem for a Dream
Your Name
Like Stars on Earth
Amelie
A Clockwork Orange
Lawrence of Arabia
Amadeus
Double Indemnity
Eternal Sunshine of the Spotless Mind
Taxi Driver
To Kill A Mockingbird
Full Metal Jacket
Singin In The Rain
2001: A Space Odyssey
Toy Story
3 Idiots
The Sting
Toy Story 3
Inglourious Basterds
The Bicycle Thief
The Kid`;

var movieNamesArray = movieNames.split('\n');
//console.log(movieNamesArray);
var tagsArray = ['comedy', 'horror', 'drama', 'holiday special', 'action', 'adventure', 'scifi', 'fantasy', 'thriller', 'animated'];
var mpaaRatings = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Unrated'];

db.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => db.queryAsync(`
    CREATE TABLE Features (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR (50),
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
      movie_shot_url VARCHAR(30),
      movie_cover_url VARCHAR(30)
    )`))
  .then(() => db.queryAsync(`
    CREATE TABLE Wishlist (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      film_name VARCHAR(20)
  )`))
  .then(() => {
    for(var x = 0; x < 100; x++) {
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
        '${movieNamesArray[Math.floor(Math.random()*movieNamesArray.length) -1]}',
        '${tagsArray[Math.floor(Math.random()*tagsArray.length) -1]}',
        '${tagsArray[Math.floor(Math.random()*tagsArray.length) -1]}',
        ${1930 + Math.floor(Math.random()* 90)},
        '${mpaaRatings[Math.floor(Math.random()*mpaaRatings.length) -1]}',
        ${Math.floor(Math.random()*200)},
        ${Math.random()*5},
        ${Math.floor(Math.random()*5000)},
        ${Math.floor(Math.random()*100)},
        '${lorem.generateParagraphs(2)}',
        ${Math.floor(Math.random()*2000)/100},
        ${Math.floor(Math.random()*2000)/100},
        ${Math.floor(Math.random()*2000)/100},
        ${Math.floor(Math.random()*2000)/100},
        'testURL',
        'testURL2'
      )`)



    }
  });

  module.exports = {
    movieNames,
    tagsArray,
    mpaaRatings,
    db
  }

