const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'application/json');
        res.write('{"test": "user"}');
    }
    res.end();
});

server.listen(3000);