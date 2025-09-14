const express = require("express");
const {handleAdminLogin} = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.post("/login",handleAdminLogin);

module.exports = adminRouter;