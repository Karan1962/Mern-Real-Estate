import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";

export const user = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user) {
      const isPasswordValid = bcryptjs.compareSync(password, user.password);
      if (isPasswordValid) {
        return res.status(201).json("user exist");
      }else {
        return res.status(404).json("invalid user information");
      }
    } 
  } catch (error) {
    console.log("Error : ", error);
    return res.json({ error });
  }
};
