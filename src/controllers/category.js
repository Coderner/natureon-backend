const Category = require("../models/Category");

async function getCategories(req,res){
   try{
     const categories = await Category.find({});
     return res.json({
        success:true,
        message:"All Categories",
        data: categories,
        error: null
     });
   }catch(error){
     return res.status(500).json({
        success:false,
        message:"Error fetching categories",
        data: null,
        error: error
     });
   }
}

module.exports = {getCategories};