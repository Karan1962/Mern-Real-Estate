import User from "../Models/User.model.js";
import bcryptjs from "bcryptjs";

export const signUpAuth = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const hashPassword = bcryptjs.hashSync(password);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    res.status(500).json("something went wrong!");
  }
};
