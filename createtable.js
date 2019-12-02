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
  var sql = "CREATE TABLE Agents (Agent_Id INTEGER, Agent_Name TEXT, Title TEXT, Phone INTEGER, EmailId TEXT)";
  
              
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});