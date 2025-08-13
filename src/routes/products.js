const express = require("express");
const {
    getAllProducts, 
    createNewProduct, 
    getProductDetailsById, 
    updateProduct, 
    deleteProduct
} = require("../controllers/product");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/",createNewProduct);
router.get("/:id",getProductDetailsById);
router.patch("/:id",updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;