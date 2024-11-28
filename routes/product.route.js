const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts,getProduct,createProduct,updatedProduct,deleteProduct} = require("../controller/product.controller.js");



//获取所有产品
router.get("/",getProducts)
router.get("/:id",getProduct)
router.post("/",createProduct)
router.put("/:id",updatedProduct)
router.delete("/:id",deleteProduct)




module.exports = router;