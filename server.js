// declaring npm packages
var express = require('express');
var bodyParser = require('body-parser');

// initialize the express function
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

// Routes n' junk
var htmlRoutes = require("./app/routing/htmlRoutes.js") (app);
var apiRoutes = require("./app/routing/apiRoutes.js") (app);
console.log(apiRoutes);

// PORT
var PORT = process.env.PORT || 8080;

// listening!
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});