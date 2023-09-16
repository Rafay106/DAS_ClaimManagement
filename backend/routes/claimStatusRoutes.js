import express from "express";
import asyncHandler from "express-async-handler";
import { getAllClaimStatus } from "../service/claimStatus.js";
import { sortFactory } from "../utils/fnCommon.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllClaimStatus();
    res.status(200).json(states.sort(sortFactory("value")));
  })
);

export default router;
