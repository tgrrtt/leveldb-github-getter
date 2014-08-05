var db = require("../db.js"),
    async   = require("async");
    

// takes array of usernames, and a callback to get called when all items have been iterated

function loadGitHubUsers (userNames, callback) {

  async.map(userNames, getUsername, callback);
  
  function getUsername(username, callback){
    db.get(username, function(err, value) {
      if (err) {
        callback(err);
      } else {
        callback(null, value);
      }
    });
  }
}

// loadGitHubUsers(["tgrrtt"], function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

module.exports = loadGitHubUsers;
