var express = require('express');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

var connection = mysql.createconncection({
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b4d552e81ff3fc',
  password: 'b3031d21',
  database: 'heroku_fa55a69b1e6a26a'
});

app.get("/db", function(req, res){
  connection.connect();

  connection.query('SELECT * products', function(err, rows, fields)) {
    if (err) throw err;




  }
});

app.get("/", function(req, res){
  //res.send("Test");
  res.sendFile(__dirname + "/index.html");
});

app.get("/listings", function(req, res){
  res.sendFile(__dirname + "/listings.html");
});

app.get("/login", function(req, res){
  res.sendFile(__dirname + "/login.html");
});

app.get("/db", function(req, res)) {

}

app.listen(port);
