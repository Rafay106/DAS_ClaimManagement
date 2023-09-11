import express from "express";
import asyncHandler from "express-async-handler";
import { getAllCities } from "../service/city.js";

const router = express.Router();

router.get(
  "/:stateID",
  asyncHandler(async (req, res) => {
    const cities = await getAllCities(req.params.stateID);
    res.status(200).json(cities);
  })
);

export default router;
