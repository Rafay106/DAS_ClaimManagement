import asyncHandler from "express-async-handler";
import {
  serviceCreateClaim,
  serviceGetClaimsNotApproved,
  serviceGetAllClaimsNotApproved
} from "../service/claim.js";
import { getDateTime } from "../utils/fnCommon.js";

// @desc Get Claims according to hierarchy
// @route GET /api/claim/:userID
// @access Public
const getClaims = asyncHandler(async (req, res) => {
  const claims = await serviceGetClaimsNotApproved(req.params.userID);
  for (const claim of claims) {
    claim.billDate = claim.billDate.toISOString().split("T")[0];
  }
  res.status(200).json(claims);
});

// @desc Get Claims according to hierarchy
// @route GET /api/claim
// @access Public
const getAllClaims = asyncHandler(async (req, res) => {
  const claims = await serviceGetAllClaimsNotApproved();
  for (const claim of claims) {
    claim.billDate = claim.billDate.toISOString().split("T")[0];
  }
  res.status(200).json(claims);
});

// @desc Create a Claim
// @route POST /api/claim
// @access Public
const createClaim = asyncHandler(async (req, res) => {
  console.log(req.body);
  const result = await serviceCreateClaim(req.body);
  if (result.affectedRows > 0) {
    res.status(201).json({ message: "created" });
  } else {
    res.status(500);
    throw new Error("Data not inserted!!!");
  }
});

export { getClaims, getAllClaims, createClaim };
