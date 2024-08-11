const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    // unique: true
  },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // required: true
  }
});

const Singup = mongoose.model('singupuser', UserSchema);

module.exports= Singup;
