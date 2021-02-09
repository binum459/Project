const express = require('express');
const Recipies = require('../model/recipie');
const Recipie =express.Router();

Recipie.get('/',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    Recipies.find()
    .then(function(recipies){
        res.send(recipies);
    });
});
 

Recipie.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    console.log(req.body);
    var recipie = {
        image:req.body.recipie.image,
        title:req.body.recipie.booktitle,
        time:req.body.recipie.time,
        ingredient:req.body.recipie.ingredient,
        instruction:req.body.recipie.instruction
      }
    var recipie = new Recipies(recipie);
    recipie.save();
});

module.exports = Recipie;