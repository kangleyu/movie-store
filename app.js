var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// view engine setup
//app.set('views', path.join(__dirname, 'public'));
//app.set('view engine', 'jade');

// initialize api (routes definition already included in api initilization)
var api = require('./server/routes/api')(app);

app.listen(8080);
console.log("movie-store app is running on port - 8080...");
