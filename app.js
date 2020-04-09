const express = require('express');

const shop = express();



shop.use('/whatsnew',(req, res, next) => {
    
    res.send('<p> the midd that handles whatsnew</p>')
});

shop.use('/accesorii',(req, res, next) => {
    
    res.send('<p> the midd that handles accesorii</p>')
});

shop.use('/bestbuy',(req, res, next) => {
    
    res.send('<p> the midd that handles bestbuy</p>')
});

shop.use('/about',(req, res, next) => {
    
    res.send('<p> the midd that handles about</p>')
});

shop.use('/blog',(req, res, next) => {
    
    res.send('<p> the midd that handles blog</p>')
});

shop.use('/sales',(req, res, next) => {
    
    res.send('<p> the midd that handles sales</p>')
});

shop.use('/',(req, res, next) => {
    
    res.send('<p> the midd that handles main app</p>')
});



shop.listen(3080)