import { User } from "../model/model.js"

export const si=async (req, res) => {
    const{data}=req.body
const dat=await User.find({email:data.email})

if (dat.length == 0) {
  const newUser=  await User.create({
    name: data.name,
    email: data.email,
    password: data.password
})
const userId=newUser._id
res
        .cookie("token", userId, {
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 100000),
          sameSite: "none",
          secure: true,
        })
.json({success:true,message:"User created successfully"})
}else{
    res.json({success:false,message:"user already exists"})
}

}