const mysql = require('mysql');

const loginInfo = {
    host: 'mycoolsql',
    port: '3306',
    user: 'root',
    password: 'sheep',
    database: 'featurefilm'
};

const connection = mysql.createConnection(loginInfo);


const getFeaturedFilmById = (id, callback) => {
  connection.query(`SELECT * FROM Features WHERE id = ${id}`, (err, result) => {
    if(err){
      console.log(err);
    } else {
      callback(err, result);
    }


  });
};

module.exports = {
  getFeaturedFilmById,
};
