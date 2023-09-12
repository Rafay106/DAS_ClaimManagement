import express from "express";
import { getClaims, createClaim } from "../controllers/claimController.js";

const router = express.Router();

router.get("/:userID", getClaims);
router.post("/", createClaim);

export default router;
