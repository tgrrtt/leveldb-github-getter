var level = require("level");

db = level("../mydb");

module.exports = function() {
  return db;
}();
