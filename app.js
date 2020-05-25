const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'application/json');
        res.write('{"test": "user"}');
    }
    if (req.url === '/message' && req.method === 'POST') {
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    res.end();
});

server.listen(3000);