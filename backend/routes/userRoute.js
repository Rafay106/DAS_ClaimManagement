import express from "express";
const router = express.Router();

import { getUserById } from "../controllers/userController.js";

router.get("/:id", getUserById);

export default router;
