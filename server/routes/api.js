// JSON API for list of movies
exports.list = function (req, res) {
    res.json({
    	"movies": [
    		{
	            "title": "Spider Man I",
	            "description": "here are some description",
	            "year": "2000",
	            "director": "Tom Yu",
	            "actors": ["Tom", "Sam"]
	        },
    	]
        
    });
};