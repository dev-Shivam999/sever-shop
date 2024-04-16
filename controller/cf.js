import { fav } from "../model/model.js"

export const cf=async (req, res) => {
const data=await fav.find()
const big=data.map(p=>p.Products.id)

res.json({id:big})
}