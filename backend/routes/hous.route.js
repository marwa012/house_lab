var router =require('express').Router();
var House=require('../schemas/house.schemas');


router.get('/',function(req,res){
    House.find(function(error,docs){
        if(error) res.json(404).json({message:error.message})
        res.status(200).json(docs);
    })
});

router.post('/',function(req,res){
    const _house=req.body;
    House.create(_house,(error,doc)=>{
        if(error) res.json(404).json({message:error.message})
        res.status(200).json({message:"House added successfully",body:doc});
    })
});

module.exports=router;