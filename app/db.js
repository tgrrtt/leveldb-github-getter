var level = require("level");
var path = require("path");

db = level(path.join(__dirname, "../mydb"));

module.exports = function() {
  return db;
}();
