const jwt = require("jsonwebtoken");
require("dotenv").config();

//benefit of using jwt is that it saves us 1 Database call

const secretKey = process.env.JWT_SECRET_KEY;
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secretKey);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}
module.exports = adminMiddleware;
