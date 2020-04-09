const http = require('http');
const express = require('express');

const shop = express();

shop.use((req, res, next) => {
    console.log('first middleware');
    next();
});


shop.use((req, res, next) => {
    console.log('sec midd')
});

const server = http.createServer(shop);
server.listen(3080);