const router = require("express").Router();
const Exercise = require("../models/exercise.model")

router.get("/", (req,res)=>{
    Exercise.find()
    .then(ex=>res.json(ex))
    .catch(err=>console.log(err))
})

router.post("/", (req,res)=>{
    
    const newEx = new Exercise({    
        duration:Number(req.body.duration),
        description:req.body.description,
        username:req.body.username,
        date:Date.parse(req.body.date)
    })

    newEx.save()
    .then(ex=>res.json(ex))
    .catch(err=>res.json(err));
})

router.get("/:id", (req,res)=>{
    Exercise.findById(req.params.id)
    .then((ex)=>res.json(ex))
    .catch(err=>console.log(err))
})

router.post("/update/:id", (req,res)=>{
    Exercise.findById(req.params.id)
    .then(exer=>{
        exer.duration = req.body.duration,
        exer.username = req.body.username,
        exer.date = req.body.date,
        exer.description= req.body.description

        exer.save()
        .then(exer=>res.json("updated"))
        .catch(err=>console.log(err))
    })
})

router.delete("/:id", (req, res)=>{

    console.log(req.params.id)
    Exercise.findByIdAndDelete(req.params.id)
    .then(ex=>res.json(ex))
    .catch(err=>console.log(err))
})

module.exports = router;