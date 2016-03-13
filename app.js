var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.send("Hello MEAN");
});

app.listen(8080);
console.log("movie-store app is running on port - 8080...");
