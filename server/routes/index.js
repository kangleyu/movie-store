exports.index = function(req, res) {
	res.render('index', { title: "Home | Movie Store", message: "Message from home page"});
};