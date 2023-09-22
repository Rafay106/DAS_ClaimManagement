import express from "express";
import {
  getClaims,
  createClaim,
  processClaim
} from "../controllers/claimController.js";

const router = express.Router();

router.get("/", getClaims).post("/", createClaim).post("/process", processClaim);

export default router;
