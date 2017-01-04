const fs = require('fs');

const stream = fs.createWriteStream('temp.log');
stream.write((new Date()).toString());
stream.close();
