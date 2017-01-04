const fs = require('fs');

const stream = fs.createReadStream('temp.log', 'UTF-8');
let data = '';

stream.once('data', function () {
  console.log('Started reading file');
});

stream.on('data', function (chunk) {
  process.stdout.write(`chunk: ${chunk.length} | `);
  data += chunk;
});

stream.on('end', function () {
  console.log(`Finished reading file ${data.length}`);
});
