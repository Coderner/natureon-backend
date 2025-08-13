const Product = require("../models/Product");

//to fetch a list of all products
async function getAllProducts(req,res){
   try{
        const allProducts = await Product.find({});
        return res.json({
          success:true, 
          message:"List of all Products",
          data: allProducts,
          error: null
     });
   }catch(error){
        return res.status(500).json({
          success:false, 
          message: "Error fetching all products",
          data: null,
          error: `${error}`
     });
   }
}

//to create/add a new product
async function createNewProduct(req, res){
   const {name, description, images, price, inStock, quantity } = req.body;
   try{
        const response = await Product.create({
            name: name,
            description: description,
            images: images,
            price: price,
            inStock: inStock,
            quantity: quantity
        });
        return res.json({
            success:true, 
            message:"Product created successfully",
            data: response,
            error:null
        });
   }catch(error){
        return res.status(500).json({
            success:false, 
            message:"Error creating new product",
            data:null,
            error:`${error}`
        });
   }
}

//to get specific product details given its id
async function getProductDetailsById(req,res){
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
           return res.status(404).json({
               success:false,
               message:"Product not found!",
               data:null,
               error:null
           })
        }
        return res.json({
               success:true,
               message:"Product found!",
               data: product,
               error:null
        })
    }catch(error){
        return res.status(500).json({
               success:false,
               message:"Error getting product details",
               data: null,
               error:`${error}`
        })
    }
}

//to update a product given its id
async function updateProduct(req,res){
    try {
          const updatedProduct = await Product.findByIdAndUpdate(
               req.params.id,
               req.body,
               { new: true, runValidators: true }
          );
          if (!updatedProduct) {
               return res.status(404).json({
               success: false,
               message: "Product not found",
               data: null,
               error: null
               });
          }
          return res.json({
               success: true,
               message: "Product updated successfully",
               data: updatedProduct,
               error: null
          });
          } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Error updating product",
               data: null,
               error: `${error}`
          });
  }
}

//to delete a product given its id
async function deleteProduct(req,res){
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
           return res.status(404).json({
               success:false,
               message:"Product not found!",
               data:null,
               error:null
           })
        }
        return res.json({
               success:true,
               message:"Product deleted successfully!",
               data:deletedProduct,
               error:null
        })
    }catch(error){
        return res.status(500).json({
               success:false,
               message:"Error deleting product",
               data:null,
               error:`${error}`
        })
    }
}

module.exports = {
    getAllProducts, 
    createNewProduct, 
    getProductDetailsById, 
    updateProduct, 
    deleteProduct
};