var fs = require('fs');

document.addEventListener('DOMContentLoaded', function() {
  var contents = fs.readFileSync('./data/sample.txt');

  document.body.innerHTML = contents;
});

