const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'application/json');
    res.write('{"test": "user"}');
    res.end();
});

server.listen(3000);