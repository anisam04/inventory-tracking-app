var express = require('express');
var router = express.Router();
var warehouseCtrl = require('../controllers/warehouseCtrl');


router.get('/allwarehouses', warehouseCtrl.getAllWarehouses);
router.get('/allwarehouses', warehouseCtrl.newWarehouseForm);
router.post('/allwarehouses', warehouseCtrl.createNewWarehouse);


module.exports = router;
