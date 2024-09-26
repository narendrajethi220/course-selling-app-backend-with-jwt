const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.JWT_SECRET_KEY;

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secretKey);
  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}
module.exports = userMiddleware;

//Middelware does these 3 thing
/*
1. End the request
2.Forward the request
3. pass data along to the next middleware
*/
