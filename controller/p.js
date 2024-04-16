import { Schema } from "../model/model.js"

export const p=async (req, res) => {
const data=await Schema.find()
const products=data.map(p=>p.Products)


res.json({products})
}