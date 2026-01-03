const express = require("express");
const createOrder = require("../controllers/order");
const orderRouter = express.Router();
const authMiddleware = require("../middlewares/auth");

orderRouter.post("/", authMiddleware, createOrder);

module.exports = orderRouter;