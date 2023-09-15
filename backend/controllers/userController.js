import asyncHandler from "express-async-handler";
import { selectUserById } from "../service/user.js";

const getUserById = asyncHandler(async (req, res) => {
  console.log(req.body);
  const userID = parseInt(req.body.user_id);
  if (!userID) {
    res.status(400);
    throw new Error("user_id is required!");
  }

  const user = await selectUserById(userID);
  if (!user) {
    res.status(401);
    throw new Error(`User with id: ${userID} not found`);
  }
  res.status(200).json(user);
});

export { getUserById };
