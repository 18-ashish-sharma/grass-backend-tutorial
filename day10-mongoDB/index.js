const { response } = require("express");
const express = require("express");
const app = express();
const connectToDB = require("./db/index");
const {UserModel} = require("./models/User.model");
const PORT = 8000;

connectToDB();

// using this we can send and view json objects.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/adduser", (request, resposnse) => {
  // console.log(request.body);
  // destructuring od data
  // const { name, phone, age } = request.body;
  const bodyName = request.body.name;
  const bodyPhone = request.body.phone;
  const age = request.body.age;
  console.log(bodyName, bodyPhone, age);

  const userDetails = new UserModel({
    name: bodyName,
    phone: bodyPhone,
  })
  // try {
  //   console.log(userDetails);
  //   userDetails.save();
  //   response.send('Data saved to mongoDB');
  // } catch (error) {
  //   response.send(error.message);
  // }
    console.log(userDetails);
    userDetails.save();
    response.send('Data saved to mongoDB');
  // userDetails.save((err) => {
  //   if(err) {
  //     response.send(err);
  //   } else {
  //     response.send('Data saved to mongoDB');
  //   }
  // })
  // resposnse.send('Please check your console')
})

app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});
