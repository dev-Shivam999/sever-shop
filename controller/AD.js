import { fav } from "../model/model.js"

export const AddFav= async function(req, res) {
    const {data}=req.body

   try {
    const p=await fav.find()
  const j=p.filter(p=>p.Products.id==data.id)
if (j.length==0) {
   await fav.create({
        Products: data
    })
    res.json({success:true})

}else{
   await fav.findByIdAndDelete({_id:j[0]._id})
    res.json({success:false})
}
    
   } catch (error) {
    res.json({success:false})
    console.log(error);
   }
}