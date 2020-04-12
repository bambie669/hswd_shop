const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const shop = express();

shop.set('view engine', 'pug');
shop.set('views', 'views')

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

shop.use(bodyParser.urlencoded({ extended: false }));
shop.use(express.static(path.join(__dirname, 'public')));

shop.use('/admin', adminData.routes);
shop.use(shopRoutes);


shop.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
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
