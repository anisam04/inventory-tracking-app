var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/productCtrl');


router.get('/allproducts', productCtrl.getAllProducts);
router.get('/addproduct', productCtrl.newProductForm);
router.post('/allproducts', productCtrl.createNewProduct);


module.exports = router;
