var routes = require('./api');
var users = require('./movie');


// JSON API for list of polls
exports.list = function (req, res) {
    res.json({
        movie: {
            title: "Spider Man I",
            description: 'here are some description'
            year: 2000,
            director: 'Tom Yu',
            actors: ['Tom', 'Sam']
        }
    });
};