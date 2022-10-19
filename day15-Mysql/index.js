// es-5 syntax
const express = require("express");
const app = express();
const port = 8000;
const db = require("mysql2-promise")();
const mysql = require("mysql");

// db.configure({
//   host: "db4free.net",
//   user: "be_admin",
//   password: "123456789",
//   database: "grass_backend",
// });

// db.query('SELECT * FROM users').spread(function (users) {
//     console.log('Hello users', users);
// });

app.use(express.json());

const connection = mysql.createConnection({
  host: "db4free.net",
  user: "be_admin",
  password: "123456789",
  database: "grass_backend",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});

app.get("/", (request, resposnse) => {
  resposnse.send("Hello world!");
});

app.get("/data", async function (req, res, next) {
  await connection.query(
    "SELECT * FROM shop",
    function (err, rows) {
      if (err) {
        res.send({err: err});
      } else {
        res.send('Ok');
      }
    }
  );
});

app.get("/mintu", (request, resposnse) => {
  resposnse.send("Hello world! on Mintu!");
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
