var express = require('express');
var app = express();
const mysql = require("mysql");
var myData;

var con = mysql.createConnection({
    host: "localhost",
    user: "brian",
    password: "condor20",
    database: "travelexperts"
});

//establishes the SQL connection
con.connect((err) => {
    if (err) throw err;
})

app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));

// index page 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

//Serves back the SQL PkgName column from the PACKAGES table in SQL
app.get('/getVacationPackages', function (req, res) {
    var vacationData;

    var sqlState1 = "SELECT PkgDesc FROM packages"

    con.query(sqlState1, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(8000);
console.log('8000 is the magic port');