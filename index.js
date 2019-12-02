const express = require('express');
const app = express();
const mysql = require("mysql");

const bodyParser = require("body-parser");

var conn = mysql.createConnection({
    host: "localhost",
    user: "Bilal",
    database: "travelexperts"
});

//establishes the SQL connection
conn.connect((err) => {
    if (err) throw err;
});
app.use(express.static('./Views', { extensions: ['html'] }));
app.use(express.static("./"));

app.use(express.static("modules"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));


//serves out the index page 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

//Serves back the SQL PkgName column from the PACKAGES table in SQL
app.get('/getVacationPackages', function (req, res) {
    var vacationData;

    var sqlState1 = "SELECT PkgDesc FROM packages"

    conn.query(sqlState1, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
    });
});
// app.get("/CustomerRegistration", (req, res) => {
//     res.sendFile("/CustomerRegistration");
// });

app.listen(8000, err => {
    if (err) throw err;
    console.log("Server started on port 8000");
});


// Code author: Bilal 
var data = [];
app.post("/post_form", (req, res) => {
    console.log(req.body);
    data[0] = req.body.custFirstName;
    data[1] = req.body.custLastName;
    data[2] = req.body.custAddress;
    data[3] = req.body.custCity;
    data[4] = req.body.custProv;
    data[5] = req.body.custPostal;
    data[6] = req.body.custCountry;
    data[7] = req.body.custHomePhone;
    data[8] = req.body.custBusPhone;
    data[9] = req.body.custEmail;
    data[10] = req.body.UserName;
    data[11] = req.body.userPassword;



    var userNameQuery = "SELECT `UserName` FROM customers WHERE `UserName` = '" + req.body.UserName + "'";
    var sqlInsert =
        "INSERT INTO `customers`(`CustFirstName`, `CustLastName`, `CustAddress`, `CustCity`, `CustProv`,"
        + " `CustPostal`, `CustCountry`, `CustHomePhone`, `CustBusPhone`, `CustEmail`, `UserName`,`UserPassword`)"
        + " VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

    conn.query(userNameQuery, data, (err, results, fields) => {
        if (err) throw console.log(err);
        console.log(results);
        if (results.length > 0) {
            console.log("Username already exists");
        } else {
            conn.query(sqlInsert, data, (err, result, fields) => {
                if (err) throw err;
                console.log(result);
                conn.end(err => {
                    if (err) throw err;
                });
                console.log("Account Registered for Username: " + req.body.UserName);
            });
        }
    })

});

// Code author: Bilal
app.post("/post_loginForm", (req, res) => {
    console.log(req.body);
    var UserName = req.body.uNameLogin;
    var Password = req.body.passwordLogin;


    conn.query("SELECT * FROM customers WHERE `UserName` = ? AND `UserPassword` = ?", [UserName, Password], (err, results, fields) => {
        if (err) {
            console.log("Error occured in conn.query");
        } else {
            if (results.length > 0) {
                console.log("login Successful");
                res.redirect("index");
            } else {
                console.log("Username not found: please register");
            }
        }
    });

})