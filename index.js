var cleanSketch = require('clean-sketch');
module.exports = function(source) {
  source = cleanSketch(source.toString());
  return source;
};