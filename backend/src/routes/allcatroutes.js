const express = require('express');
const AllCategories = require('../model/AllCategories');
const AllCategory =express.Router();
var bodyparser=require('body-parser');

AllCategory.use(bodyparser.json());

AllCategory.get('/',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    AllCategories.find()
    .then(function(AllCategories){
        res.send(AllCategories);
    });
});


AllCategory.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    console.log(req.body);
    var category = {
        image:req.body.category.image,
        title:req.body.category.booktitle,
        time:req.body.category.time
      }
    var category = new AllCategories(category);
    category.save();
});

AllCategory.get('/:id',  (req, res) => {
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    const id = req.params.id;
      AllCategories.findOne({"_id":id})
      res.render('recipies')
      .then((category)=>{
          res.send(category);
      });
  })


AllCategory.delete('/remove/:id',(req,res)=>{
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
   
    const id = req.params.id;
    AllCategories.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  AllCategory.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    image=req.body.image,
    title=req.body.booktitle,
    time=req.body.time,
    ingredient=req.body.ingredient,
    instruction=req.body.instruction
   AllCategories.findByIdAndUpdate({"_id":id},
                                {$set:{"image":image,
                                "title":title,
                                "time":time,
                                "ingredient":ingredient,
                                "instruction":instruction,
                                
                                }})
   .then(function(){
       res.send();
   })
 })

module.exports = AllCategory;