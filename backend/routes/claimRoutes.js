const express = require("express");
const {
  getUserClaims,
  getTeamClaims,
  getClaimById,
  createClaim,
  processClaim,
  countClaims,
} = require("../controllers/claimController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router
  .get("/", protect, getUserClaims)
  .get("/team", protect, getTeamClaims)
  .get("/id/:claimId", protect, getClaimById)
  // .get("/count", protect, countClaims)
  .post("/", protect, createClaim)
  .post("/process", protect, processClaim);

module.exports = router;
