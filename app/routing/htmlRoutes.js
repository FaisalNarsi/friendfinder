var path = require("path");

module.exports = function(app) {
  app.get("/survey", function (req, res){
    res.sendFile((path.join))
  })
  
}

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});

app.use(express.static(path.join(__dirname, "/app/public/"))
});
