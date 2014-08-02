var level   = require("level"),
    db = require("../db.js"),
    async   = require("async");
    
var iterator = function(err, result) {
  if (err) {
    return err;
  }
};

// takes array of usernames, and a callback to get called when all items have been iterated

function loadGitHubUsers (userNames, callback) {
  // allow single usernames
  if (typeof userNames === "string") {
    userNames = [userNames];
  }
  async.map(userNames, function(username, iterator) {
    db.get(username, function(err, value) {
      if (err) {
        iterator(err);
      } else {
        iterator(null, value);
      }
    });
  }, callback);
}

// loadGitHubUsers(["tgrrtt"], function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

module.exports = loadGitHubUsers;
