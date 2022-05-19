const inventoryModel = require('../Models/Inventorymodel')
const warehouseModel = require('../Models/WarehouseModel')

async function getAllWarehouses(req, res) {
    const allWarehouses = await warehouseModel.find({})
    res.render('warehouse/allwarehouses', {warehouses: allWarehouses})
}

function newWarehouseForm(req, res){
    res.render('warehouse/allwarehouses');
}

function createNewWarehouse(req, res) {
    let newWarehousedata = req.body;
    console.log(req.body);
    warehouseModel.create(newWarehousedata, function(err){
        if(err) {
            res.send(`Error!! ${err.message}`)
        } else {
            res.redirect('/allwarehouses');
        }
    })

}

module.exports = {
    getAllWarehouses,
    newWarehouseForm,
    createNewWarehouse,
}