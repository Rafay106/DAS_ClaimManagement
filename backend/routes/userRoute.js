const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getUserById,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

router
  .get("/:id", protect, getUserById)
  .post("/login", loginUser)
  .post("/logout", logoutUser);

module.exports = router;
