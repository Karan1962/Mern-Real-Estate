import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";

export const user = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      const error = new Error("Invalid user information");
      error.status = 404;
      throw error;
    }

    const isPasswordValid = bcryptjs.compareSync(password, user.password);

    if (isPasswordValid) return res.status(201).json("user exists");
    else {
      const error = new Error("Invalid password");
      error.status = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
