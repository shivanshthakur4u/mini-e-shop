const express = require("express");
const router = express.Router();
const { getAllProducts, getProductsById } = require("../conroller/productController")
    //@desc GEt all products from db
    //@route GET /api/products 
    //access public 

router.get("/", getAllProducts);

//@desc GEt a products by id from db
//@route GET /api/products/:id 
//access public 

router.get("/:id", getProductsById);

module.exports = router;