var http    = require("http"),
    url     = require("url"),
    load    = require("./load"),
    save    = require("./save"),
    db      = require("./db.js");
    
var server = http.createServer();

server.on("request", function(req, res) {
  var username = url.parse(req.url, true).query.name;
  var usernames = [username];
  load(usernames, function(err, userData) {
    if (err) {
      console.log("Getting users info...");
      save(usernames, function(err, userDataFromSave) {
        if (err) {
          res.statusCode = 404;
          res.end("There was an error");
        } else {
          res.end(userDataFromSave[0]);
        }
      });
    } else {
      res.end(userData[0]);
    }
  });
});

server.listen(8000);
