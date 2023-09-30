const express = require("express");
const asyncHandler = require("express-async-handler");
const { getAllStates } = require("../service/state");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await getAllStates();
    res.status(200).json(states);
  })
);

module.exports = router;
