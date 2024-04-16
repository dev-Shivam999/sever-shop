import { Schema } from "../model/model.js"

export const fv=async (req, res) => {
const data=await Schema.find()
const big=data.map(p=>p.Products.id)

res.json({id:big})
}