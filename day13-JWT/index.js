const express = require("express");
const app = express();
const PORT = 9000;
const jwt = require("jsonwebtoken");
const secret = "Secret";

app.use(express.json());

function generateJWTToken(username) {
  // 3 things : 1- data (encode), secret, expiresIn : when token should expired
  return jwt.sign(
    {
      data: username,
    },
    secret,
    { expiresIn: 60 * 60 }
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  // getting only token from bearer
  const token = authHeader.split(" ")[1];
  // checking token existence
  if (token === null) return res.send("No token found!");
  // verify token validity
  const decodedToken = jwt.verify(token, secret, function (err, user) {
    if (err) return res.send({ Error: err });
    req.body.user = user;
  });
  next();
}

app.post("/token", (request, resposnse) => {
  const token = generateJWTToken(request.body.name);
  resposnse.json(token);
});


//                        middleware
app.post("/tokenverify", authenticateToken, (request, resposnse) => {
  // middleware function
  resposnse.json("OK");
});

app.listen(PORT, console.log("Server listening on port " + PORT));
