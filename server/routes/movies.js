var config = require('../config');

// Get the whole list of movies
exports.movies = function(req, res) {
  res.json(
    [
    		{
        "id": 0,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 1,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 2,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 3,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 4,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 5,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 6,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 7,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
      {
        "id": 8,
        "title": "Spider Man I",
        "description": "here are some description",
        "poster": "x-man.jpg",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"],
        "createdAt": "2016-1-02"
      },
    ]);
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