import mongoose from "mongoose";

export  const  dbConnection = async()=>{

    await mongoose.connect('mongodb+srv://shivamswami982:Rp611vnkOqaVGpD3@cluster0.pmmx3im.mongodb.net/Shop').then(() => console.log("db.connect successfully")).catch(() => console.log("db.connect unsuccessful", process.env.MONGODB_URI))
    
}