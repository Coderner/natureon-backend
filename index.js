const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/config/connection");
const adminRouter = require("./src/routes/admin");
const productRouter = require("./src/routes/products");
const categoryRouter = require("./src/routes/categories");
const corsMiddleware = require("./src/middlewares/cors");
const path = require("path");

dotenv.config();
const app = express();

//mongodb connection
connectToDb();

//middlewares

app.use("/uploads", express.static(path.join(__dirname,"src",  "uploads")));
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.get('/', (req, res) => {
  res.status(200).send('OK');
});
app.use("/admin",adminRouter);
app.use("/products",productRouter);
app.use("/categories",categoryRouter);

app.listen((process.env.PORT),()=>{
    console.log(`Server started successfully at port ${process.env.PORT}`);
})