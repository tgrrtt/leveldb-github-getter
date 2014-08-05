var level = require("level");
var path = require("path");

module.exports = level(path.join(__dirname, "../mydb"));
