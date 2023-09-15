import asyncHandler from "express-async-handler";
import { serviceGetClaims } from "../service/claim.js";

// @desc Get Claims according to hierarchy
// @route GET /api/claim/:userID
// @access Public
const getClaims = asyncHandler(async (req, res) => {
  const cities = await serviceGetClaims(req.params.userID);
  res.status(200).json(cities);
});

// @desc Create a Claim
// @route POST /api/claim
// @access Public
const createClaim = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.send(201).json();
});

export { getClaims, createClaim };
