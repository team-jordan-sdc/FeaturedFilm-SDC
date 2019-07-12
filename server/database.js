const mysql = require('mysql');

const loginInfo = {
  user: 'root',
  password: '',
  database: 'featurefilm',
};

const connection = mysql.createConnection(loginInfo);

const getFeaturedFilmById = (id, callback) => {
  connection.query(`SELECT * FROM Features WHERE id = ${id}`, (err, result) => {
    // if (err) console.log(err);
    callback(err, result);
  });
};

module.exports = {
  getFeaturedFilmById,
};
