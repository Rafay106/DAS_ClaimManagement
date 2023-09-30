const express = require("express");
const {
  getClaims,
  getClaimById,
  createClaim,
  processClaim,
  countClaims,
} = require("../controllers/claimController");

const router = express.Router();

router
  .get("/", getClaims)
  .get("/id/:claimId", getClaimById)
  .get("/count", countClaims)
  .post("/", createClaim)
  .post("/process", processClaim);

module.exports = router;
