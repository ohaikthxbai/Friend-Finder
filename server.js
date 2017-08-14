// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');

// initialize the express function
var app = express();

// Routes n' junk
var htmlRoutes = require("./app/routing/htmlRoutes.js") (app);
var apiRoutes = require("./app/routing/apiRoutes.js") (app);
console.log(apiRoutes);

// PORT
var PORT = 3005;

// listening!
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});