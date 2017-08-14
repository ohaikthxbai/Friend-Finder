// API version of routing

var acquaintData = require('../data/friends');

module.exports = function (app) {
    app.get("api/acquaintances", function(req, res) {
        res.json(acquaintData);
    });

    app.post('/api/acquaintances', function(req, res) {
		friendData.push(req.body);
		console.log(acquaintData);
		res.json(acquaintData);
	});
}