import asyncHandler from "express-async-handler";
import { selectUserById, selectUserByEmail } from "../service/user.js";
import generateToken from "../utils/generateToken.js";

const getUserById = asyncHandler(async (req, res) => {
  const userID = parseInt(req.params.id);
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

// @desc    Login user/set token
// route    POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Both Email and Password are required");
  }

  const user = await selectUserByEmail(email);

  if (!user) {
    res.status(404);
    throw new Error("User not found, please register");
  }

  if (password === user.pswd) {
    generateToken(res, user.id);
    res.status(200).json({
      id: user.id,
      code: user.code,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Incorrect login details");
  }
});

// @desc    Logout user
// route    POST /api/users/logout
// @access  Private
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out." });
};

export { getUserById, loginUser, logoutUser };
