require('dotenv').config();
const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const connectToDB = async () => {
  mongoose.connect(MONGO_DB_URL, (err) => {
    if (err) throw err;
    console.log("connected to MongoDB Database");
  });
};

module.exports = connectToDB;