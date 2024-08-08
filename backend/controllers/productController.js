const Product = require('../models/productModel.js');

let productController = {};

productController.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    return next({
      message: 'error in getProducts: ' + err,
      log: err,
    });
  }
};

productController.addProduct = async (req, res, next) => {
  try {
    await Product.create(req.body);
    res.json('New Product added now')
  } catch (err) {
    return next({
      message: 'error in addProducts: '+ err,
      log: err,
    })
  }
}

productController.removeProduct = async (req, res, next) => {

  try {
    await Product.findOneAndDelete(req.body);
    res.json('Product deleted')
  } catch (err) {
    return next({
      message: 'error in addProducts: '+ err,
      log: err,
    })
  }
}

productController.updatePrice = async (req, res, next) => {
  console.log(req.body)
  try {
    
    const condition = {_id: req.body._id};
    const update = {price: req.body.price}
    await Product.findOneAndUpdate(condition, update);
    res.json('Price changed to ' + update.price)
  } catch (err) {
    return next({
      message: 'error in updatePrice: '+ err,
      log: err,
    })
  }
}

productController.updateStock = async (req, res, next) => {
  try {
    const condition = {_id: req.body._id};
    const update = {stock: req.body.stock}
    await Product.findOneAndUpdate(condition, update);
    res.json('Stock changed to ' + update.stock)
  } catch (err) {
    return next({
      message: 'error in updateStock: '+ err,
      log: err,
    })
  }
}

productController.updateSold = async (req, res, next) => {
  try {
    const condition = {_id: req.body._id};
    const update = {num_sold: req.body.num_sold}
    await Product.findOneAndUpdate(condition, update);
    res.json('Stock changed to ' + update.num_sold)
  } catch (err) {
    return next({
      message: 'error in addProducts: '+ err,
      log: err,
    })
  }
}

module.exports = productController;
