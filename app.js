var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public"));

// view engine setup
//app.set('views', path.join(__dirname, 'public'));
//app.set('view engine', 'jade');

var api = require('./server/routes/api');

app.use('/api/list', api.list);
app.use('/api/get/:id', api.get);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080);
console.log("movie-store app is running on port - 8080...");
