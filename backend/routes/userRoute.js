import express from "express";
const router = express.Router();

import {
  getUserById,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

router
  .get("/:id", getUserById)
  .post("/login", loginUser)
  .post("/logout", logoutUser);

export default router;
