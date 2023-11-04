const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Node!!!!</h1>');
    res.statusCode = 200;
    res.end();
});

server.listen(port, 'localhost', () => {
    console.log('listening for requests on port \"'+port+'\"');
});