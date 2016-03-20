var config = require('../config');

// Get the whole list of movies
exports.movies = function(req, res) {
  var movies = [];
  for (i = 0; i < 88; i++) {
    movies.push({
      "id": i,
      "title": "Spider Man I",
      "description": "here are some description",
      "poster": "x-man.jpg",
      "year": "2000",
      "director": "Tom Yu",
      "actors": ["Tom", "Sam"],
      "createdAt": "2016-1-02"
    })
  }
  res.json(movies);
};

// get single movie based on provided id
exports.movie = function(req, res) {
  var id = req.params.id;
  res.json({
    "id": id,
    "title": "Spider Man I",
    "description": "here are some description",
    "poster": "x-man.jpg",
    "year": "2000",
    "director": "Tom Yu",
    "actors": ["Tom", "Sam"]
  });
};

// get movie list based on page
exports.page = function (req, res) {
  var page = req.params.page;
  var pageSize = config.pageSize;
  res.json({
    page: page,
    pageSize: pageSize
  });
};

// get the total number of movies in the current store
exports.total = function (req, res) {
  res.json({
    total: 100
  });
};

// search the movies based on provided search pattern
exports.search = function (req, res) {
  var pattern = req.params.pattern;
  res.json({
    pattern: pattern
  });
};

// create a new movie
exports.create = function (req, res) {
  var movie = req.body.movie;
  res.json(movie);
};

// update a movie
exports.update = function (req, res) {
  var movie = req.body.movie;
  res.json(movie);
};

// delete a movie
exports.delete = function (req, res) {
  var id = req.params.id;
  res.json({
    id: id
  });
};