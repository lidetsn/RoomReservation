import mongoose from "mongoose"


const guestSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,
    },
 
    email:{
        type:String,
    },
    checkIn:{
        type:Date,
        required:true
    },
    checkOut:{
        type:Date,
        required:true
    },
    roomType:{
        type:String,
        required:true
    }


})

const guest=mongoose.model("guest",guestSchema)

export default guest