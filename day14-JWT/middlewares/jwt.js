require("dotenv").config();
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.JWTSECRET;

function generateJWTToken(game_name) {
  console.log('OKOKOKOKOKOKOKO');
  return jwt.sign(
    {
      data: game_name,
    },
    APP_SECRET,
    { expiresIn: 60 * 60 }
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.send("No token found!");
  const decodedToken = jwt.verify(token, APP_SECRET, function (err, user) {
    if (err) return res.send({ Error: err });
    req.body.user = user;
  });
  next();
}

module.exports = {
  generateJWTToken,
  authenticateToken,
};
