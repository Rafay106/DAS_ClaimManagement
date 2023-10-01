const express = require("express");
const asyncHandler = require("express-async-handler");
const { getAllCities, getCitiesByState } = require("../service/city");
const { sortFactory } = require("../utils/fnCommon");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const cities = await getAllCities(req.params.stateID);
    res.status(200).json(cities);
  })
);

router.get(
  "/:stateID",
  asyncHandler(async (req, res) => {
    const cities = await getCitiesByState(req.params.stateID);
    res.status(200).json(cities);
  })
);

module.exports = router;
