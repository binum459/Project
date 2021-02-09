const express = require('express');
const Drinks = require('../model/drinks');
const Drink =express.Router();

Drink.get('/',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    Drinks.find()
    .then(function(Drinks){
        res.send(Drinks);
    });
});


Drink.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    console.log(req.body);
    var drink = {
        image:req.body.drink.image,
        title:req.body.drink.booktitle,
        time:req.body.drink.time
      }
    var drink = new Drinks(drink);
    drink.save();
});

module.exports = Drink;