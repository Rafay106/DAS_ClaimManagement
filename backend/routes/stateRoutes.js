import express from "express";
import asyncHandler from "express-async-handler";
import { getAllStates } from "../service/state.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllStates();
    res.status(200).json(states);
  })
);

export default router;
