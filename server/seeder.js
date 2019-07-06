const mysql = require('mysql');
const Promise = require ('bluebird');
const database = 'featurefilm'

const connection = mysql.createConnection({
  user: 'root',
  password: ''
});

const db = Promise.promisifyAll(connection, {multiArgs: true});


const movieNames = `The Shawshank Redemption
The Godfather (1972) The Godfather, Part II
The Dark Knight
12 Angry Men
Schindler's List
Pulp Fiction
The Lord of the Rings: The Return of the King
The Good, the Bad, and the Ugly
Fight Club
The Lord of the Rings: The Fellowship of the Ring
Forrest Gump
Star Wars: Episode V: The Empire Strikes Back
Inception (2010)
The Lord of the Rings: The Two Towers
One Flew Over The Cuckoo's Nest
GoodFellas
The Matrix
The Seven Samurai
Star Wars
City of God
Se7en
The Silence of the Lambs
It's A Wonderful Life
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
Dr. Strangelove or: How I Learned To Stop Worrying and Love the Bomb
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
Singin' In The Rain
2001: A Space Odyssey
Toy Story
3 Idiots
The Sting
Toy Story 3
Inglourious Basterds
The Bicycle Thief
The Kid`;

var movieNamesArray = movieNames.split('\n');
console.log(movieNamesArray);

db.connectAsync()
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => db.queryAsync(`
    CREATE TABLE Features (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR (20),
      category_1 VARCHAR(10),
      category_2 VARCHAR(10),
      release_date INT,
      mpaa_rating VARCHAR(5),
      length INT,
      star_rating INT,
      star_rating_count INT,
      rt_rating INT,
      description VARCHAR(350),
      hd_rent INT,
      sd_rent INT,
      hs_cost INT,
      sd_cost INT,
      movie_shot_url VARCHAR(30),
      movie_cover_url VARCHAR(30)
    )`))
  .then(()=> db.queryAsync(`
    CREATE TABLE Wishlist (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      film_name VARCHAR(20)
  )`))
  // .then(()=> {
  //   for(var x = 0; x < 100; x++){
  //     db.queryAsync(`INSERT INTO Features (
  //       title,
  //       category_1,
  //       category_2,
  //       release_date,
  //       mpaa_rating,
  //       length,
  //       star_rating,
  //       star_rating_count,
  //       rt_rating,
  //       description,
  //       hd_rent,
  //       sd_rent,
  //       hs_cost,
  //       sd_cost,
  //       movie_shot_url,
  //       movie_cover_url
  //     ) VALUES (


  //     )

  //     `)
  //   }





  // })