import User from "../Models/User.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
export const updateUser = async (req, res, next) => {
  console.log(req.body)
  if (req.user.id !== req.params.id)
    return next(
      errorHandler(401, "Bad request kindly log into your own account")
    );
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);

    
  } catch (error) {
    next(error)
  }
};


export const deleteUser =async (req,res,next)=>{
  if(req.user.id !== req.params.id){
    return next(errorHandler(401,"unauthorized"))
  }

  try{
   await User.findByIdAndDelete(req.params.id)
   res.clearCookie('token');
   res.status(200).json('user deleted successfully!')

  }catch(error){
    next(error)
  }
}