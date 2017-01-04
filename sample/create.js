const fs = require('fs');

const md = `
# Sample Markdown Title

## Sample Subtitle

- point
- point
- point

`;

fs.writeFile('sample.md', md.trim(), function (err) {
  if (err) {
    throw err;
  }

  console.log('File Created');
});
