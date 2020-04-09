const express = require('express');
const bodyParser = require('body-parser')
const shop = express();

shop.use(bodyParser.urlencoded({extended: false}));

shop.use('/',(req, res, next) => {
    
    // res.send('<p> the midd that handles main app</p>')
    next();
});



shop.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Adauga Produs</button></form>')
})

shop.use('/product',(req, res,next) => {
    console.log(req.body);
    res.redirect('/');
    
})

shop.use('/',(req, res, next) => {
    
    res.send('<p> the midd that handles main app</p>')
    
});

// shop.use('/whatsnew',(req, res, next) => {
    
//     res.send('<p> the midd that handles whatsnew</p>')
// });

// shop.use('/accesorii',(req, res, next) => {
    
//     res.send('<p> the midd that handles accesorii</p>')
// });

// shop.use('/bestbuy',(req, res, next) => {
    
//     res.send('<p> the midd that handles bestbuy</p>')
// });

// shop.use('/about',(req, res, next) => {
    
//     res.send('<p> the midd that handles about</p>')
// });

// shop.use('/blog',(req, res, next) => {
    
//     res.send('<p> the midd that handles blog</p>')
// });

// shop.use('/sales',(req, res, next) => {
    
//     res.send('<p> the midd that handles sales</p>')
// });




shop.listen(3080)