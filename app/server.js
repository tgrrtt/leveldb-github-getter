var http    = require("http"),
    url     = require("url"),
    load    = require("./load"),
    save    = require("./save"),
    db      = require("./db.js");
    
var server = http.createServer();

server.on("request", function(req, res) {
  var username = url.parse(req.url, true).query.name;
    load(username, function(err, value) {
    if (err) {
      console.log("Getting users info...");
      save(username, function(err, value) {
        if (err) {
          res.statusCode = 404;
          res.end("There was an error");
        } else {
          res.end(value[0]);
        }
      });
    } else {
      res.end(value[0]);
    }
  });
});

server.listen(8000);
