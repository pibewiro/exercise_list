const router = require("express").Router();
const mongoose = require("mongoose")
const User = require("../models/user.model")

router.route("/").get((req,res)=>{
    User.find()
    .then(user=>{
        return res.status(200).json(user)
    })
    .catch(err=>res.status(400).json("Error: ", err))
})

router.route("/").post((req,res)=>{
    
    const username = req.body.username;
    const newUser = User({username:username})

    newUser.save()
    .then(()=>res.json("User Added"))
    .catch(err=>res.status(400).json("Error: " +err))
})

module.exports = router;