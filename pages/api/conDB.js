const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});



  export default function handler(req, res) {
    connection.query(
      'SELECT * FROM `ds_user`',
      function(err, results) {
        res.status(200).json(results);
      }
    );
    
  }

