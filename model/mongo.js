const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    usernam: String,
  
    databas:String,
  });

const  mg = mongoose.model('mongo', userSchema);


module.exports=mg