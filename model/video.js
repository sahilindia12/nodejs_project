
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    
});

const Image = mongoose.model('vdd', ImageSchema);

module.exports=Image;