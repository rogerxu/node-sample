const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static('./public'));


const items = [];

app.get('/api', (req, res) => {
  res.json(items);
});

app.listen(8080);

console.log('Express app running on port 8080');

module.exports = app;
