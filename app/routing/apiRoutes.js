// get route for api/friends/
// display json

var connection = require("../server.js");

module.exports = function(app) {
  app.get("data/friends", function(req, res) {
    var query_db = "SELECT * FROM friends";
    connection.query(query_db, function(err, result) {
      res.json(result);

    });
  });

app.post("data/friends", function(req, res) {

  console.log("Result: ");
  console.log(req.body);

  var query_db = INSERT INTO friends (author, body, created_at) VALUES (?, ?, ?);

  connection.query(query_db, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
    res.json(result);
    res.end();
  });
});


});
