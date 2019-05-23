var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

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


app.listen(port);
