// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// initialize the express function
var app = express();

// PORT
var PORT = 3005;

// ROUTE TESTING HERE -- will be added to routing directory afterwards
app.get("/", function(req, res) {
    // again; thank the universe for taking notes during class.
    var home = path.join(__dirname, "app/public/home.html");
    res.sendFile(home);
});

// listening!
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});