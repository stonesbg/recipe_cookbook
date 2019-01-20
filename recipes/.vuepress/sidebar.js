var fs = require('fs');

module.exports = function(path) {
  var files = fs.readdirSync(path);
  var filter = ".md";
  var list = [""];
  for (var i in files) {
    var filename = files[i].split('.').slice(0, -1).join('.');
    if (filename.toLowerCase() !=="readme" && files[i].indexOf(filter)>=0) list.push(filename);
  }
  console.log(`${path}: `, list);
  return list;
}