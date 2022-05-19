const inventoryModel = require('../Models/Inventorymodel')
const productModel = require('../Models/ProductModel')
const warehouseModel = require('../Models/WarehouseModel')

async function getAllInventory(req, res){
  try {
  let inventories = await inventoryModel.find({})
  .populate('itemName')
  .populate('warehouse')
  let products = await productModel.find({})
  let warehouses = await warehouseModel.find({})
   res.render('inventory/allinventory', 
   {title:'All Inventory', inventories, products, warehouses})
  } catch (error) {
    res.send(error)
  }
}

function createNewInventory(req, res){
  inventoryModel.create(req.body, function(err){
    if(err) {
        res.send(`Error!! ${err.message}`)
    } else {
        res.redirect('/allinventory');
    }
})

}
async function showOneInventory(req, res){
  const inventory = await inventoryModel.findById(req.params.id)
  .populate('itemName')
  .populate('warehouse')
  // console.log(inventory);
  res.render('inventory/showandeditinventory', {oneInventory: inventory})
}

function updateOneInventory(req, res) {
  inventoryModel.findByIdAndUpdate(req.params.id, req.body, function(err){
    if (err)
      res.send(err);
      res.redirect(`/inventory/${req.params.id}`)
  })
}

function getdeleteOneInventory(req, res) {
  res.render('inventory/deleteinventory', {id: req.params.id} )
}

async function deleteOneInventory(req, res) {
  await inventoryModel.findByIdAndDelete(req.params.id)
  res.redirect('/allinventory')
  
}


module.exports = {
     getAllInventory,
     createNewInventory,
     showOneInventory,
     updateOneInventory,
     getdeleteOneInventory,
     deleteOneInventory
}