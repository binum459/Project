const express = require('express');
const Desserts = require('../model/desserts');
const Dessert =express.Router();

Dessert.get('/',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    Desserts.find()
    .then(function(Desserts){
        res.send(Desserts);
    });
});


Dessert.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    console.log(req.body);
    var dessert = {
        image:req.body.dessert.image,
        title:req.body.dessert.booktitle,
        time:req.body.dessert.time
      }
    var dessert = new Desserts(dessert);
    dessert.save();
});

module.exports = Dessert;