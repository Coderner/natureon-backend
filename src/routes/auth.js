const express = require("express");
const {handleLogin, handleSignUp} = require("../controllers/auth"); 

const authRouter = express.Router();

authRouter.post("/signup",handleSignUp);
authRouter.post("/login",handleLogin);

module.exports = authRouter;