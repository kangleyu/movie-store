// JSON API for list of movies
exports.list = function (req, res) {
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

exports.get = function(req, res) {
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