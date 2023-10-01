const express = require("express");
const {
  getClaims,
  getClaimById,
  createClaim,
  processClaim,
  countClaims,
} = require("../controllers/claimController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router
  .get("/", protect, getClaims)
  .get("/id/:claimId", protect, getClaimById)
  .get("/count", protect, countClaims)
  .post("/", protect, createClaim)
  .post("/process", protect, processClaim);

module.exports = router;
