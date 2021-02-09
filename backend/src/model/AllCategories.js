const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@projfiles.orbyo.mongodb.net/Recipie?retryWrites=true&w=majority',
{useNewUrlParser: true, 
useUnifiedTopology: true});

const Schema = mongoose.Schema;

var NewCategorySchema = new Schema ({

    image:String,
    title:String,
    time:String,
    instruction:String,
    ingredient:String
   });

var AllCategories = mongoose.model('allcategories',NewCategorySchema);

module.exports = AllCategories;
