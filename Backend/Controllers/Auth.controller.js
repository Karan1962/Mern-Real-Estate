import User from '../Models/User.model.js'

export const signUpAuth = async (req,res)=>{
  const {userName,password,email} = req.body;
  
  const newUser = new User({
    userName,email,password
  });
  await newUser.save();
  res.status(201).json();
}
