const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
    warehouseLocation: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Warehouse', warehouseSchema);