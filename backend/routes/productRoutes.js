const express = require("express");
const router = express.Router();
const {getProducts, addProduct, removeProduct, updateStock, updateSold, updatePrice} = require('../controllers/productController');

router.get('/products', getProducts,(req,res)=>{
res.json(res.locals.allProducts)
})

//How do we protect these from unauthorized postman requests?

router.post('/products/add', addProduct, (req, res)=>{
    res.status(200).json("New item added")
})

router.delete('/products/remove', removeProduct, (req, res)=>{
    res.status(200).json("Item removed")
})

router.put('/products/price', updatePrice, (req, res)=>{
    res.status(200).json("Price adjusted")
})

router.put('/products/stock', updateStock, (req, res)=>{
    res.status(200).json("Stock adjusted")
})

router.put('/products/sold', updateSold, (req, res)=>{
    res.status(200).json("Number Sold adjusted")
})

module.exports = router;