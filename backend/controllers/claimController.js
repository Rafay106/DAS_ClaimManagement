import asyncHandler from "express-async-handler";
import { serviceGetClaims } from "../service/claim.js";

const getClaims = asyncHandler(async (req, res) => {
  const cities = await serviceGetClaims(req.params.userID);
  res.status(200).json(cities);
});

// @desc
// @route /api/claim/
const createClaim = asyncHandler(async (req, res) => {
  console.log(req.body);
});

export { getClaims, createClaim };
