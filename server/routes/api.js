/**
 * Rest API Definitions
 */
var mongoose = require('mongoose');
var config = require('../config');
var movies = require('./movies');

mongoose.connect(config.mongodbConnection);

function version(req, res) {
  res.json(config.version);
};

module.exports = function Api(app) {
  app.get('/api/v', version);
  app.get('/api/movies', movies.movies);
  app.get('/api/movie/:id', movies.movie);
  app.get('/api/page/:page', movies.page);
  app.get('/api/total', movies.total);
  app.get('/api/search/:pattern', movies.search);
  app.post('/api/new', movies.create);
  app.post('/api/update', movies.update);
  app.delete('/api/delete/:id', movies.delete);
}