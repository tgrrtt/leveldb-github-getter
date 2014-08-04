var level   = require("level"),
    async   = require("async"),
    db = require("../db.js"),
    request = require("request");

var iterator = function(err) {
  if (err) {
    return err;
  }
};

// takes an array of github usernames and a callback
// callback gets called after all array items have been iterated on.
// callbacks 2nd value will be a copy of the data that the db saved.

function saveGitHubUser (userNames, callback) {
  async.map(userNames, function(username, iterator) {
    request.get('https://api.github.com/search/users?q=' + username, {
      headers: {
        'User-Agent': 'request'
      }
    }, function(err, resp, body) {
        db.put(username, body, function(err) {
          console.log("Saved: " + username);
          if (err) {
            iterator(err);
          } else {
            iterator(null, body);
          }
        });
      });
  }, callback);
}

// saveGitHubUser(["tgrrtt", "HGPA"], function(err, value) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

module.exports = saveGitHubUser;
