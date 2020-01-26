const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;
const connection = mongoose.connection;
const userRoutes = require("./routes/user")
const exerciseRoutes = require("./routes/exercise")
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());




const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})

connection.once("open", ()=>console.log("Connected to Database"));

app.use("/users", userRoutes);
app.use("/exercises", exerciseRoutes);

app.listen(port, ()=>console.log(`Connected to Port: ${port}`))
