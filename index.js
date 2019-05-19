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

app.get("/locations", function(req, res){
  res.sendFile(__dirname + "/public/info/locations.html");
});

app.get("/treeinformation", function(req, res){
  res.sendFile(__dirname + "/public/info/treeinformation.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/public/info/contact.html");
});

app.get("/delivery", function(req, res){
  res.sendFile(__dirname + "/public/info/delivery.html");
});

app.get("/about", function(req, res){
  res.sendFile(__dirname + "/public/info/about.html");
});


app.listen(port);
