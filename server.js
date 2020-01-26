const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;
const connection = mongoose.connection;
const userRoutes = require("./routes/user")
const exerciseRoutes = require("./routes/exercise")
const path = require("path")
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());




const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})

connection.once("open", ()=>console.log("Connected to Database"));

app.use("/users", userRoutes);
app.use("/exercises", exerciseRoutes);

console.log("Dir: ", __dirname);

if(process.env.NODE_ENV === "production")
{
    app.use(express.static("frontend/build"))

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}

app.listen(port, ()=>console.log(`Connected to Port: ${port}`))
