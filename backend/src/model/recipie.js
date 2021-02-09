const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@projfiles.orbyo.mongodb.net/Recipie?retryWrites=true&w=majority',
{useNewUrlParser: true, 
useUnifiedTopology: true});

const Schema = mongoose.Schema;

var NewRecipieSchema = new Schema ({

    image:String,
    title:String,
    time:String,
    ingredient:String,
    instruction:String
   }); 

var Recipies = mongoose.model('recipies',NewRecipieSchema);

module.exports = Recipies;
