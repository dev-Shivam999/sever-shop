export const Verify = async (req, res, next) => {
  const tokenone = req.cookies;  
  const token =tokenone

// if (token) {
    
//     const message=await User.find()
//        const existingUser =  message.some(i=>i._id== token );
//     if (existingUser) {
//         next()
        
//     }else{

//         res.json({success: true,message:"login first"})
//     }
   
//   }
// else{
    
// res.json({success: true,message:"login first"})
// }
next()
}