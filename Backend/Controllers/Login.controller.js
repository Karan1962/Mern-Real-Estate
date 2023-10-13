import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";

export const loginAuth = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      const error = new Error("Invalid user information");
      error.status = 404;
      throw error;
    }

    const isPasswordValid = bcryptjs.compareSync(password, user.password);
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);

    if (isPasswordValid) return res.cookie('token',token,{httpOnly:true}).status(201).json(user);
    else {
      const error = new Error("Invalid password");
      error.status = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};