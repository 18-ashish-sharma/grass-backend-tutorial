const { response } = require("express");
const express = require("express");
const app = express();
const connectToDB = require("./db/index");
const UserModel = require("./models/User.model");
const PORT = 8000;

connectToDB();

// using this we can send and view json objects.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/adduser", async (request, response) => {
  const user = new UserModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/foods", async (request, response) => {
  const foods = await UserModel.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});
// ...

app.patch("/food/:id", async (request, response) => {
  try {
    await foodModel.findByIdAndUpdate(request.params.id, request.body);
    await foodModel.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...
// ...

app.delete("/food/:id", async (request, response) => {
  try {
    const food = await foodModel.findByIdAndDelete(request.params.id);

    if (!food) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...
app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});
