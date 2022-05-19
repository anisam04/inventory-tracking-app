const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inventorySchema = new Schema({
  warehouse: {type: Schema.Types.ObjectId, ref: 'Warehouse'},
  itemName: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: {
      type: Number,
      min: 1,
      max: 500
    },
}, {
  timestamps: true
});

module.exports = mongoose.model('Inventory-tracking', inventorySchema);