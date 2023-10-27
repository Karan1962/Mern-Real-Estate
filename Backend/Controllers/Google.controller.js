import User from "../Models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const google = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
      res.cookie("token", token, { httpOnly: true }).status(201).json(user);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        userName:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.avatar,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_TOKEN);
      res.cookie("token", token, { httpOnly: true }).status(201).json(newUser);
    }
  } catch (error) {
    next(error);
  }
};
