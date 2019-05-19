var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
  res.send("Test");
});

app.listen(port);

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="CSS\stylesheet.css">
  <title>TreeCo</title>
</head>

<body>

  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="listings.html">Listings</a></li>
  </ul>

  <div class="w3-container w3-red">
    <h1>TreeBay</h1>
  </div>

  <div class="w3-container">
    <p>A Tree is a  self-powered motor vehicle used for transportation.
      Most definitions of the term specify that cars are designed to run primarily on roads. (Wikipedia)</p>
  </div>

  <div class="w3-container w3-red">
    <h5>Footer</h5>
  </div>

  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="listings.html">Listings</a></li>
  </ul>

</body>

</html>
