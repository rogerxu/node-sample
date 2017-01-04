const fs = require('fs');

fs.unlink('./temp/before.js', function (err) {
  if (err) {
    throw err;
  }

  console.log('File removed');
});
