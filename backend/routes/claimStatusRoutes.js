const express = require("express");
const asyncHandler = require("express-async-handler");
const { getAllClaimStatus } = require("../service/claimStatus");
const { sortFactory } = require("../utils/fnCommon");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const statuses = await getAllClaimStatus();
    res.status(200).json(statuses);
  })
);

module.exports = router;
