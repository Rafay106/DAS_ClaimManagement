import express from "express";
import asyncHandler from "express-async-handler";
import { getAllClaimStatus } from "../service/claimStatus.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllClaimStatus();
    res.status(200).json(states);
  })
);

export default router;
