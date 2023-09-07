const express=require('express');
const dotenv = require('dotenv').config();
const connectDatabase = require('./config/mongoDB.js');
const ImportData = require('./Dataimport.js');
const productRoute = require("./Routes/ProductRoutes.js");
const userRouter = require("./Routes/UserRoutes.js")
const { notFound,errorHandler } = require("./Middleware/Errors.js");
const cors = require('cors');
const orderRouter = require('./Routes/orderRoutes.js');
const app=express();
connectDatabase();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors('*'))

//API
app.use("/api/import", ImportData);
app.use("/api/products",productRoute);  
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter)

app.get("/api/config/paypal",(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{console.log(`server is running....${process.env.PORT}`)})