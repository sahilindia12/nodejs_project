

const mongoose = require('mongoose');
const db=async()=>{

    mongoose.connect('mongodb://localhost:27017/sahil', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      // Check if the connection is successful
      mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
      }).on('error', (error) => {
        console.log('Connection error:', error);
      });
}

  module.exports =db;