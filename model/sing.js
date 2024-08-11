const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    usernam: String,
    password: String,
    gmail:String,
  });

const  sing = mongoose.model('singup', userSchema);


module.exports=sing