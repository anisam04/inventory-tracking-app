const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  itemName: {
      type: String,
      required: true
    },
   itemDescription: {
       type: String,
   },
  costPerItem: {
      type: Number, 
      min: 1, 
      max: 500, 
      required: true
    },
    }, 
{
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);