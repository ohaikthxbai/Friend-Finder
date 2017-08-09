// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// initialize the express function
var app = express();

// PORT
var PORT = 3001;

app.get("/", function (req, res) {
    res.send("Testing!!");
});

// listening!
app.listen(PORT);