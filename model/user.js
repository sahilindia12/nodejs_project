
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nam: String,
    age: Number,
  });

const  user = mongoose.model('sing', userSchema);


module.exports=user