import express from "express";
const router = express.Router();

import { getUserById } from "../controllers/userController.js";

router.post("/", getUserById);

export default router;
