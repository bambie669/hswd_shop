const express = require('express')
const router = express.Router();


router.get('admin/add-product', (req, res, next) => {
    res.send('<form action="/add-product" method="post"><input type="text" name="title"><button type="submit">Adauga Produs</button></form>')
})

router.post('admin/product',(req, res,next) => {
    console.log(req.body);
    res.redirect('/');
    
})

module.exports = router