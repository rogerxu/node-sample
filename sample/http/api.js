const http = require('http');
const data = require('./data/inventory.json');

http.createServer(function (req, res) {
  console.log(`${req.method} request for ${req.url}`);

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/json',
    });

    res.end(JSON.stringify(data));
  } else if (req.url === '/instock') {
    listInStock(res);
  } else if (req.url === '/onorder') {
    listOnBackOrder(res);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    });
    res.end('File not found');
  }
}).listen(8080);

console.log('Server listening on port 8080');

function listInStock(res) {
  const inStock = data.filter(function (item) {
    return item.available === 'In stock';
  });

  res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res) {
  const onOrder = data.filter(function (item) {
    return item.available === 'On back order';
  });

  res.end(JSON.stringify(onOrder));
}
