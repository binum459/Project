const express = require('express');
const cors = require('cors');
const jwt =require('jsonwebtoken')
var bodyparser=require('body-parser');
var app = new express();
const multer = require('multer');

const AllCategory = require('./src/routes/allcatroutes');
const Dessert = require('./src/routes/dessertroutes');
const Snack =require('./src/routes/snackroutes');
const Drink = require('./src/routes/drinkroutes');
const Recipie =require('./src/routes/recipieroutes');

app.use(cors());
app.use(bodyparser.json());
app.use('/home',AllCategory);
app.use('/desserts',Dessert);
app.use('/snacks',Snack);
app.use('/drinks',Drink);
app.use('/recipies',Recipie);

email='admin';
password='1234';

const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'public')
},
filename:function(req,file,cb){
    const parts =file.mimetype.split('/');
    cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
} 

})

const upload = multer({storage});

app.post('/img',upload.single("image"),(req,res)=>{
    res.sendFile(`${__dirname}/pubic/${req.file.filename}`)
})


app.post('/login',(req,res)=>{
    let userData = req.body
    if(!email){
        res.status(401).send('invalid')
    }else
    if(password!==userData.password){

        res.status(200).send('invalid password')
    }
    else{
        let payload ={subject:email+password}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
    }
})



 




app.listen(3000, function(){
    console.log('listening to port 3000');
});
