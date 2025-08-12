const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/connection");

dotenv.config();

const app = express();

connectToDb();

app.listen((process.env.PORT),()=>{
    console.log(`Server started successfully at port ${process.env.PORT}`);
})