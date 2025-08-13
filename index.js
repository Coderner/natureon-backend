const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/connection");
const productRouter = require("./src/routes/products");

dotenv.config();
const app = express();

//mongodb connection
connectToDb();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/products",productRouter);

app.listen((process.env.PORT),()=>{
    console.log(`Server started successfully at port ${process.env.PORT}`);
})