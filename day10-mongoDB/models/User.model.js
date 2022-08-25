const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a schema for user
const UserSchema = new Schema({
    // first letter of type of variable shoulb be capital
  name: String,
  phone: Number,
});
// creating model with specific schema
const UserModel = mongoose.model('Users', UserSchema);
// exporting model
module.exports = UserModel

// const mongoose = require("mongoose");
// const User = mongoose.model(
//   "Patient",
//   new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     phone: Number,
//     roles: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Role"
//       }
//     ]
//   })
// );
// module.exports = User;