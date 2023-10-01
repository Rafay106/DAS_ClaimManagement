const asyncHandler = require("express-async-handler");
const {
  selectClaimById,
  serviceGetClaims,
  serviceGetAllClaims,
  serviceCreateClaim,
  serviceProcessClaim,
  serviceCountClaim,
  selectUserClaims,
} = require("../service/claim");
const { getDateTime } = require("../utils/fnCommon");

// @desc Get Claims
// @route POST /api/claim
// @access Public
const getClaims = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const statusId = req.body.statusId;
  if (!userId) {
    res.status(400);
    throw new Error("User id is required!");
  }

  const rows = await selectUserClaims(userId, statusId);

  const claims = [];
  if (rows) {
    for (const _ of rows) {
      claims.push({
        pk: _.pk,
        claimFor: _.claim_for,
        billDate: _.bill_date,
        amount: _.amount,
        submitDate: _.submit_date,
        city: _.city,
        claimer: _.claimer,
        claimerEmail: _.claimer_email,
        status: _.status,
        comments: _.comments,
        remarks: _.remarks,
        lastActionDate: _.last_action_date,
        manager: _.manager,
        managerEmail: _.manager_email,
      });
    }
    res.status(200).json(claims);
  } else {
    res.status(200).json({ body: "claim not found!" });
  }
});

// @desc Get Claims
// @route GET /api/claim/:claimId
// @access Protected
const getClaimById = asyncHandler(async (req, res) => {
  const claimId = req.params.claimId;
  const claim = await selectClaimById(claimId);
  if (!claim) {
    res.status(404);
    throw new Error("Claim not found");
  }
  console.log(claim);
  res.status(200).json(claim);
});

// @desc Process a Claim
// @route POST /api/claim/process
// @access Public
const processClaim = asyncHandler(async (req, res) => {
  const claimId = req.body.claimId;
  const userId = req.body.userId;
  const statusId = req.body.statusId;
  const result = await serviceProcessClaim(claimId, userId, statusId);
  if (result.statusCode === 401) {
    res.status(401).send(result.message);
  } else if (result.statusCode === 200 && result.affectedRows > 0) {
    res.status(200).send("Updated Successfully");
  } else {
    res.status(500).json(result);
  }
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

const countClaims = asyncHandler(async (req, res) => {
  const result = await serviceCountClaim();
  res.status(200).json(result);
});

module.exports = {
  getClaims,
  getClaimById,
  createClaim,
  processClaim,
  countClaims,
};
