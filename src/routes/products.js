const express = require("express");
const {
    getProducts, 
    createNewProduct, 
    getProductDetailsById, 
    updateProduct, 
    deleteProduct
} = require("../controllers/product");
const upload = require("../middlewares/multer");

const router = express.Router();

router.get("/", getProducts);
router.post("/",upload.array("images", 5),createNewProduct);
router.get("/:id",getProductDetailsById);
router.patch("/:id",upload.array("images", 5),updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;