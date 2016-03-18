// /server/routes
// api definition for all interfaces
var movies = require('./movies');
var config = require('../config');

function version(req, res) {
  res.json(config.version);
};

module.exports = function Api(app) {
  app.get('/api/v', version);
  app.get('/api/list', movies.list);
  app.get('/api/get/:id', movies.get);
  app.get('/api/page/:page', movies.page);
  app.get('/api/total', movies.total);
  app.get('/api/search/:pattern', movies.search);
  app.post('/api/new', movies.create);
  app.post('/api/update', movies.update);
  app.delete('/api/delete/:id', movies.delete);
}