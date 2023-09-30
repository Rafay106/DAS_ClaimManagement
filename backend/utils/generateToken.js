const jwt = require("jsonwebtoken");

const generateToken = (res, userPk) => {
  const token = jwt.sign({ userPk }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // One day
  });
};

module.exports = generateToken;
