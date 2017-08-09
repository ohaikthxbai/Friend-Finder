// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// initialize the express function
var app = express();

// PORT
var PORT = 3005;

// other requirements?

// listening!
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});