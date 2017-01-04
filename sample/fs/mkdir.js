const fs = require('fs');

if (fs.existsSync('temp')) {
  console.log('Directory already exists');
} else {
  fs.mkdir('temp', function(err) {
    if (err) {
      throw err;
    }

    console.log('Directory Created');
  });
}
