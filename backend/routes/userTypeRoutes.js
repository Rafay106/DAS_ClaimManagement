const express = require("express");
const asyncHandler = require("express-async-handler");
const { selectAllUserTypes } = require("../service/userType");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const states = await selectAllUserTypes();
    res.status(200).json(states);
  })
);

module.exports = router;
