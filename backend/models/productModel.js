const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true, default: Math.ceil(Math.random()*10000) },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: String, required: true, default: "5" },
    stock: {type: Number, required: true, default: 10},
    num_sold: {type: Number, required: true, default: 0}
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//Issue: generating ID for new products. Is this field redundant with the _id field?
//Temporary solution: Random number between 1 and 10,000. UUID does not work because it includes alpha characters