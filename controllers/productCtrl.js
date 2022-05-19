const productModel = require('../Models/ProductModel')

async function getAllProducts(req, res) {
    const allProducts = await productModel.find({})
    res.render('product/allproducts', {products: allProducts})
}

function newProductForm(req, res){
    res.render('product/addnewproduct');
}

function createNewProduct(req, res) {
    let newProductData = req.body;
    productModel.create(newProductData, function(err){
        if(err) {
            res.send(`Error!! ${err.message}`)
        } else {
            res.redirect('/allproducts');
        }
    })

}

module.exports = {
    newProductForm,
    createNewProduct,
    getAllProducts

}