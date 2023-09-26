import express from "express";
import {
  getClaims,
  getClaimById,
  createClaim,
  processClaim,
  countClaims,
} from "../controllers/claimController.js";

const router = express.Router();

router
  .get("/", getClaims)
  .get("/id/:claimId", getClaimById)
  .get("/count", countClaims)
  .post("/", createClaim)
  .post("/process", processClaim);

export default router;
