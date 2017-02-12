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
app.use(bodyParser.json({ type: application/vnd.api.json }));

// my friends in an array form

var myFriends = [{
  routeName: "Dave"
  name: "Dave"
}, {
  routeName: "Ava"
  name: "Ava"
}];

// get route for api/friends/
// display json

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});

if (chosen) {
  console.log(chosen);

  for (var i = 0; i < myFriends.length; i++) {
    if (chosen === myFriends[i]);
      res.json(myFriends[i]);
      return;
    }
  }

  res.json(false);
}

else {
  res.json(myFriends);
}
});

app.listen(PORT, function() {
  console.log("Faisal's server is up and runnin'");
});
