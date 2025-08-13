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
    }
},
{ 
    timestamps: true 
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;