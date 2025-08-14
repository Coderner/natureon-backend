const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    images:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    inStock:{
        type:Boolean,
        default:true
    },
    quantity:{
        type:Number,
        default:0,
        min:0
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Plants",
        "Seeds",
        "Planters & Pots",
        "Stands",
        "Tools & Accessories",
        "Decor",
        "Plant Care",
      ],
    },
    subcategory: {
      type: String,
      required: true,
      enum: [
        "Indoor Plants",
        "Outdoor Plants",
        "Flower Seeds",
        "Vegetable Seeds",
        "Herb Seeds",
        "Terracotta Pots",
        "Plastic Pots",
        "Metal Planters",
        "Hanging Planters",
        "Plant Stands",
        "Wooden Stands",
        "Metal Stand",
        "Hanging Chains",
        "Sprayers",
        "Gardening Tools",
        "Bird Houses",
        "Fertilisers",
        "Plant Diet",
        "Soil",
      ],
    }
},
{ 
    timestamps: true 
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;