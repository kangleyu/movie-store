// JSON API for list of movies
exports.list = function (req, res) {
    res.json({
    	"movies": [
    		{
    			"id": 0,
	            "title": "Spider Man I",
	            "description": "here are some description",
	            "year": "2000",
	            "director": "Tom Yu",
	            "actors": ["Tom", "Sam"]
	        },
	        {
    			"id": 1,
	            "title": "Spider Man I",
	            "description": "here are some description",
	            "year": "2000",
	            "director": "Tom Yu",
	            "actors": ["Tom", "Sam"]
	        },
	        {
    			"id": 2,
	            "title": "Spider Man I",
	            "description": "here are some description",
	            "year": "2000",
	            "director": "Tom Yu",
	            "actors": ["Tom", "Sam"]
	        },
	        {
    			"id": 3,
	            "title": "Spider Man I",
	            "description": "here are some description",
	            "year": "2000",
	            "director": "Tom Yu",
	            "actors": ["Tom", "Sam"]
	        },
    	]
        
    });
};

exports.get = function(req, res) {
	var id = req.params.id;
	res.json({
		"id": id,
        "title": "Spider Man I",
        "description": "here are some description",
        "year": "2000",
        "director": "Tom Yu",
        "actors": ["Tom", "Sam"]
	});
};