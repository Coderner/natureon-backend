const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/connection");
const adminRouter = require("./src/routes/admin");
const productRouter = require("./src/routes/products");
const categoryRouter = require("./src/routes/categories");
const orderRouter = require("./src/routes/order");
const authRouter = require("./src/routes/auth");
const corsMiddleware = require("./src/middlewares/cors");
const path = require("path");

dotenv.config();
const app = express();

//mongodb connection
connectToDb();

//middlewares

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads", express.static(path.join(__dirname,"src",  "uploads")));


//routes
app.get('/', (req, res) => {
  res.status(200).send('OK');
});
app.use("/auth",authRouter);
app.use("/admin",adminRouter);
app.use("/products",productRouter);
app.use("/categories",categoryRouter);
app.use("/orders", orderRouter);

app.listen((process.env.PORT),()=>{
    console.log(`Server started successfully at port ${process.env.PORT}`);
})