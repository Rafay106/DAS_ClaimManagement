import express from "express";
import asyncHandler from "express-async-handler";
import { getClaims } from "../service/claim.js";

const router = express.Router();

router.get(
  "/:userID",
  asyncHandler(async (req, res) => {
    const cities = await getClaims(req.params.userID);
    res.status(200).json(cities);
  })
);

export default router;
