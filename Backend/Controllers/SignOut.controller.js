export const signOutAuth = (req, res, next)=>{
    try{
     res.clearCookie('token');
     res.status(200).json('user signed out successfully');
    }catch(error){
       next(error)
    }
}