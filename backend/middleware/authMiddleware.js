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
    let id = jwt.verify(token, process.env.JWT_SECRET).userId;
    req.user = (
      await db.query(`SELECT id, name, email FROM users WHERE id = ${id}`)
    ).rows[0];
    next();
  }
});

module.exports = { protect };
