// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// initialize the express function
var app = express();

// PORT
var PORT = 3005;

// Routing n stuffs
app.get("/", function(req, res) {
    res.send("<h1>TESTING!</h1>");
});

// listening!
app.listen(PORT);