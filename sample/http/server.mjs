import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      date: new Date(),
    })
  );
});

server.listen(8080);
console.log('HTTP server listening on port 8080');
