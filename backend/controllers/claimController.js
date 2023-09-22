import asyncHandler from "express-async-handler";
import {
  serviceCreateClaim,
  serviceGetClaims,
  serviceGetAllClaims,
  serviceProcessClaim,
} from "../service/claim.js";
import { getDateTime } from "../utils/fnCommon.js";

// @desc Get Claims
// @route GET /api/claim?user_id=&status_id= (query is optional)
// @access Public
const getClaims = asyncHandler(async (req, res) => {
  const userId = req.query.user_id;
  const statusId = req.query.status_id;
  // console.log("userId :>> ", userId);
  // console.log("statusId :>> ", statusId);
  let claims;
  if (userId && statusId && statusId !== "0") {
    claims = await serviceGetClaims(parseInt(userId), parseInt(statusId));
  } else {
    claims = await serviceGetAllClaims();
  }
  for (const claim of claims) {
    claim.billDate = claim.billDate.toISOString().split("T")[0];
  }
  if (claims.length === 0) {
    res.status(404).send("Claims not found!");
    return;
  }
  res.status(200).json(claims);
});

// @desc Process a Claim
// @route POST /api/claim/process
// @access Public
const processClaim = asyncHandler(async (req, res) => {
  const claimId = req.body.claimId;
  const userId = req.body.userId;
  const statusId = req.body.statusId;
  console.log("claimId", claimId);
  console.log("userId", userId);
  console.log("statusId", statusId);
  const resp = await serviceProcessClaim(claimId, userId, statusId);
  res.send("OK");
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

export { getClaims, createClaim, processClaim };
