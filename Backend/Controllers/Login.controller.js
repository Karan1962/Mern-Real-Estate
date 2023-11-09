import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

export const loginAuth = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) return next(errorHandler(404, "User does not exist"));

    const isPasswordValid = bcryptjs.compareSync(password, user.password);
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);

    if (!isPasswordValid) return next(errorHandler(401, "Invalid Password"));
    res.cookie("token", token, { httpOnly: true }).status(201).json(user);
  } catch (error) {
    next(error);
  }
};
