const mysql = require('mysql');//import

//database details
const db = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8644076',
  port:"3306",
  password: '7xIUTgHi35',
  database: 'sql8644076',
});

// Connect to the database
db.connect((err) => {
  //if error
  if(err) throw err;

  console.log('Connected to MySQL database');

  //create
  var sql = "CREATE TABLE Customer (name VARCHAR(255), address VARCHAR(255))";
  //var sql = "Create DATABASE CODE";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

});
