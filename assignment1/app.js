const http = require('http');
const router = require('./route');

const server=http.createServer(router.routing);

server.listen(3000);
