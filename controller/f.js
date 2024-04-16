import { fav } from "../model/model.js"

export const f=async (req, res) => {
const data=await fav.find()
const products=data.map(p=>p.Products)


res.json({products})
}