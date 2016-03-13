var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

var api = require('./server/routes/api');

app.use('/api/list', api.list);

app.listen(8080);
console.log("movie-store app is running on port - 8080...");
