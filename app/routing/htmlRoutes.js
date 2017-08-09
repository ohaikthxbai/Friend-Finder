// tested routes in server js
// once they worked, moving them over to his file here

// requiring the npm package
var path = require('path');

// let the routing begin!
module.exports = function (app) {
    app.get("/", function(req, res) {
        // again; thank the universe for taking notes during class.
        var home = path.join(__dirname, "app/public/home.html");
        res.sendFile(home);
    });

    app.get("/survey", function(req, res) {
        var survey = path.join(__dirname, "app/public/survey.html");
        res.sendFile(survey);
    });
}