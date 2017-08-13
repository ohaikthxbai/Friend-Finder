// API version of routing

module.exports = function (app) {
    app.get("api/list", function(req, res) {
        res.json(friends);
    });
}