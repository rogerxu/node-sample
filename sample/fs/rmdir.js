const fs = require('fs');

fs.readdir('temp', function (err, files) {
  if (err) {
    throw err;
  }

  files.forEach(function (fileName) {
    fs.unlink(fileName, function (err) {
      if (err) {
        throw err;
      }
    });
  });
});

fs.rmdir('temp', function (err) {
  if (err) {
    throw err;
  }

  console.log('Directory removed');
});
