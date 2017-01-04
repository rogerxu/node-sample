const fs = require('fs');

fs.rename('./temp/before.js', './temp/after.js', function (err) {
  if (err) {
    throw err;
  }

  console.log('File renamed');
});
