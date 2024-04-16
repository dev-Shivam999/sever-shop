import mongoose from "mongoose";

const todoSchema =mongoose.Schema({
    Products:{

        
        type:Object,
        required:true
    }
})
const UserData=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const favSchema =mongoose.Schema({
    Products:{

        
        type:Object,
        required:true
    }
})

export const Schema =mongoose.model("Schema",todoSchema)
export const fav =mongoose.model("SchemaOne",favSchema)
export const User =mongoose.model("UserData",UserData)