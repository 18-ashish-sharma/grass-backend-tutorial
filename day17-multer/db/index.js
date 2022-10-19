const mongoose = require("mongoose");

const MONGO_DB_URL =
  "mongodb+srv://user:1234@cluster0.vj9s5df.mongodb.net/?retryWrites=true&w=majority";
const connectToDB = async () => {
  mongoose.connect(MONGO_DB_URL, (err) => {
    if (err) throw err;
    console.log("connected to MongoDB Database");
  });
};

module.exports = connectToDB;