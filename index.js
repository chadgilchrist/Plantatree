var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b44ace26fea6f3',
    password : 'ea11b339',
    database : 'heroku_c9cba001b0caa9d'
});

connection.connect(function(err) {
    if (err) throw err;
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

app.get("/cart", function(req, res){
  res.sendFile(__dirname + "/cart.html");
});

app.get('/test',function(req,res){
    db.query('SELECT * FROM products', function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.send(result);
    });
});


app.listen(port);
