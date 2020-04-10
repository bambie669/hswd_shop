const express = require("express");
const bodyParser = require("body-parser");
const shop = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require('./routes/shop');

shop.use(bodyParser.urlencoded({ extended: false }));

shop.use(adminRoutes);
shop.use(shopRoutes);



shop.use((req, res, next) => {

    res.status(404).send('<p>💩page💩not💩found💩</p>')
    
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

shop.listen(3080);
