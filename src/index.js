const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.method, req.url);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
