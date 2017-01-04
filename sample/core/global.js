var path = require('path');

var hello = 'Hello world from Node.js';

var justNode = hello.slice(17);
console.log(`Rock on World from ${justNode}`);

console.log(__dirname);

console.log(__filename);

console.log(`Hello from ${path.basename(__filename)}`);
