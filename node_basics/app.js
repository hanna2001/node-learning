const http = require('http');
const fs=require('fs');
const router=require('./routes')

console.log(router.hander);

const server = http.createServer(router.routes);

server.listen(3000);
