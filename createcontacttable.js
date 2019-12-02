var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Contact (Full_Name TEXT, Phone INTEGER, City TEXT, EmailId TEXT, Reason TEXT)";
  
              
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Contact Table created");
  });
});