const socks5 = require('node-socks5-server');

const server = socks5.createServer();
server.listen(process.env.PORT || 1080);