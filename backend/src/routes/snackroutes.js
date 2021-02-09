const express = require('express');
const Snacks = require('../model/snacks');
const Snack =express.Router();

Snack.get('/',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    Snacks.find()
    .then(function(Snacks){
        res.send(Snacks);
    });
});


Snack.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    console.log(req.body);
    var snack = {
        image:req.body.snack.image,
        title:req.body.snack.booktitle,
        time:req.body.snack.time
      }
    var snack = new Snacks(snack);
    snack.save();
});

module.exports = Snack;