var mysql = require("mysql");
var express = require("express");
const bodyParser = require("body-parser");
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "travelexperts"
});

con.connect(function(err) {
  console.log("Connected");
  if (err) throw err;
});

app.use(express.static("./"));

app.listen(8000, err => {
  if (err) throw err;
  console.log("Server is listening.");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/contact.html");
});

app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/thanks.html");
});


app.post("/send_form", (req, res)=>{
	console.log(req.body);
	data[0] = req.body.Full_Name;
	data[1] = req.body.Phone;
	data[2] = req.body.City;
	data[3] = req.body.EmailId;
	data[4] = req.body.Reason;
  console.log("Connected to SQL Database.");
  var sql = "INSERT INTO contact (Full_Name, Phone, City, EmailId, Reason) VALUES (?,?,?,?,?)";
  con.query(sql, data, (err, result, fields)=>{
    if (err) throw err;
    console.log(result);
    con.end((err)=>{
      if (err) throw err;
    });
  });
	res.redirect("/thanks");
});

app.get("/agentsdata", (req, res) => {
  con.query("SELECT AgtFirstName, AgtLastName, AgtBusPhone, AgtEmail, AgtPosition FROM agents", function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

