const express = require("express");
const asyncHandler = require("express-async-handler");
const { getAllDesignation } = require("../service/designation");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllDesignation();
    res.status(200).json(states);
  })
);

module.exports = router;
