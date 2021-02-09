const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@projfiles.orbyo.mongodb.net/Recipie?retryWrites=true&w=majority',
{useNewUrlParser: true, 
useUnifiedTopology: true});

const Schema = mongoose.Schema;

var NewDessertSchema = new Schema ({

    image:String,
    title:String,
    time:String
   });

var Desserts = mongoose.model('desserts',NewDessertSchema);

module.exports = Desserts;
