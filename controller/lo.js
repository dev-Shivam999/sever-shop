import { User } from "../model/model.js";

export const lo = async (req, res) => {
  const  {data}  = req.body;
  const dat = await User.find({ email: data?.email });
  if (dat.length > 0) {
    if (dat[0].password == data.password) {
      const userId = dat[0]._id;
      res
        .cookie("token", userId, {
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 100000),
          sameSite: "none",
          secure: true,
        })
        .json({
          success: true,
          message: "user has been login",
        });
    }else{
        res.json({success: false, message:"incerate password"})
    }
  } else {
    res.json({ success: false, message: "user not found" });
  }

};
