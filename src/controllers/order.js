const Order = require("../models/Order");

async function createOrder(req, res){
  try {
    const { fullName, email, phone, address, city, postalCode, country, items, totalAmount, paymentMethod } = req.body;
    const order = new Order({
      fullName,
      email,
      phone,
      address,
      city,
      postalCode,
      country,
      items,
      totalAmount,
      paymentMethod,
      paymentStatus: paymentMethod === "Online" ? "Pending" : "Cash on Delivery",
      status: "Pending",
    });

    await order.save();
    res.json({ success: true, message: "Order created", order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = createOrder;