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
  var sql = "INSERT INTO agents (Agent_Id, Agent_Name, Title, Phone, EmailId)"
            + "VALUES (4, 'Test4', 'test4', '404', 'test4@gmail.com')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});