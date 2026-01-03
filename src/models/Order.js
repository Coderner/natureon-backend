const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
  },
  fullName: String,
  phone: String,
  address: String,
  city: String,
  postalCode: String,
  country: String,
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" }, 
  paymentMethod: { type: String },
  paymentStatus: { type: String, default: "Pending" },
},
{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
