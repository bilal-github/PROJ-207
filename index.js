var express = require('express');
var app = express();
var myData;

// set the view engine to ejs
app.set('view engine', 'pug');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.sendFile("./views/index.html");
});

app.get('/indexPackages', function(req, res) {
    res.send(myData);
});

app.listen(8000);
console.log('8000 is the magic port');