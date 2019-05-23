var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b44ace26fea6f3',
    password : 'ea11b339',
    database : 'heroku_c9cba001b0caa9d'
});

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/trees');
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");


connection.connect(function(err) {
    if (err) throw err;
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/tree", function(req, res){
  connection.query('SELECT * FROM products WHERE product_id = ?', req.query.id, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.render(__dirname + "/tree1.html", {id: req.query.id, name: result[0].product_name});
  });

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
    connection.query('SELECT * FROM products', function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
});

app.listen(port);
console.log(`Example app listening on port ${port}!`)
