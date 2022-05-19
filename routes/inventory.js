var express = require('express');
var router = express.Router();
var inventoryCtrl = require('../controllers/inventoryCtrl');

router.get('/allinventory', inventoryCtrl.getAllInventory);
router.post('/allinventory', inventoryCtrl.createNewInventory);
router.get('/inventory/:id', inventoryCtrl.showOneInventory);
router.put('/inventory/:id', inventoryCtrl.updateOneInventory)
router.get('/deleteinventory/:id', inventoryCtrl.getdeleteOneInventory)
router.delete('/deleteinventory/:id', inventoryCtrl.deleteOneInventory)

module.exports = router;
