// dependencies defined
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//setting up Express app
var app = express();
var port = 8080;

// Parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api.json" }));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRotes.js")(app);

// get route for api/friends/
// display json


app.listen(PORT, function() {
  console.log("Faisal's server is up and runnin'");
});
