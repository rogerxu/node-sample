const fs = require('fs');

fs.readFile('./files.js', 'UTF-8', function (err, contents) {
  if (err) {
    throw err;
  }

  console.log(contents);
});
