const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next();
});

app.use(express.static('./public'));
app.use(cors());

let items = [];

app.get('/api', (req, res) => {
  res.json(items);
});

app.post('/api', (req, res) => {
  items.push(req.body);
  res.json(items);
});

app.delete('/api/:id', (req, res) => {
  items = items.filter(item => item.id.toLowerCase() !== req.params.id.toLowerCase());
  res.json(items);
});

app.listen(3000);

console.log('Express app running on port 8080');

module.exports = app;
