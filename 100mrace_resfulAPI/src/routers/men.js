const express = require("express");

const router = new express.Router(); 
const  MensRanking= require("../models/mens");



app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertMens =  addingMensRecord.save();  
        res.status(201).send(insertMens);
        
    }catch(e){
        res.status(400).send(e); 

    } 
})

app.get("/mens",async(req,res)=>{
    try{
       const getMens = await MensRanking.find({}).sort({"ranking":1});
       res.send(getMens);
        
    }catch(e){
        res.status(400).send(e); 

    } 
})

//We will handle  request for individuals
app.get("/mens/:id",async(req,res)=>{
    try{
        const _id= req.params.id;
       const getMen = await MensRanking.findById(_id);
       res.send(getMen);
        
    }catch(e){
        res.status(400).send(e); 

    } 
})


//We will handle patch request for individuals
app.get("/mens/:id",async(req,res)=>{
    try{
        const _id= req.params.id;
       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
        new:true
       });
       res.send(getMen);
        
    }catch(e){
        res.status(500).send(e); 

    } 
})

//We will handle patch request for individuals
app.get("/mens/:id",async(req,res)=>{
    try{
       const getMen = await MensRanking.findByIdAndDelete(req.params.id);
       res.send(getMen);
        
    }catch(e){
        res.status(500).send(e); 

    } 


})

module.exports  =  router;

