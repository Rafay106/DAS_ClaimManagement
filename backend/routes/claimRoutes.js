import express from "express";
import { getClaims, createClaim, getAllClaims } from "../controllers/claimController.js";

const router = express.Router();

router.get("/:userID", getClaims);
router.get("/", getAllClaims);
router.post("/", createClaim);

export default router;
