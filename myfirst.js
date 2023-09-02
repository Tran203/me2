var http = require('http'); //import http

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //
  res.end('Hello World!'); //respond back to client
}).listen(8080);