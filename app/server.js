var express = require("express"),
    load    = require("./load"),
    save    = require("./save"),
    db      = require("./db.js");

var app = express();
app.get("/", function(req, res) {
  load(req.query.name, function(err, value) {
    if (err) {
      console.log("Getting users info...");
      save(req.query.name, function(err, value) {
        if (err) {
          res.status(404).send("There was an error");
        } else {
          res.send(value[0]);
        }
      });
    } else {
      res.send(value[0]);
    }
  });
});

app.listen(8000);
