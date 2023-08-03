const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const productRoutes = require('./routes/productRoutes')




mongoose.connect("mongodb://localhost:27017/EcommerceComp")
.then(()=>{console.log('database connected')})
.catch((err)=>{console.log(err.message)})


app.use(express.json());
app.use(cookieParser());

app.use('/api/categories',productRoutes)


app.listen(3000,() => {
    console.log("listening on port 3000");
  })