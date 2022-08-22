const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;
const MONGO_DB_URL = 'mongodb+srv://user:1234@cluster0.vj9s5df.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL,
      err => {
          if(err) throw err;
          console.log('connected to MongoDB Database')
      });
  }
connectToDB();

app.listen(PORT, function() {
    console.log('Server running on port', PORT);
});



