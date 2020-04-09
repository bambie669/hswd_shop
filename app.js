const express = require('express');

const shop = express();

shop.use((req, res, next) => {
    console.log('first middleware');
    next();
    
});


shop.use((req, res, next) => {
    console.log('sec midd')
    res.send('<h1>Hello from express</h1>');
});

shop.listen(3080)