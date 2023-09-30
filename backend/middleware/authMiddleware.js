const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const db = require("../config/db");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token!");
  } else {
    let pk = jwt.verify(token, process.env.JWT_SECRET).userPk;
    req.user = await db.query(
      `SELECT pk, name, email FROM users WHERE pk = ${pk}`
    );
    next();
  }
});

module.exports = { protect };
