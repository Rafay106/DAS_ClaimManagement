import express from "express";
import asyncHandler from "express-async-handler";
import { getAllDesignation } from "../service/designation.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllDesignation();
    res.status(200).json(states);
  })
);

export default router;
