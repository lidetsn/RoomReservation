import mongoose from "mongoose"



const roomSchema=new mongoose.Schema({
slug:{
        type:String,
        required:true
    },
name:{
        type:String,
        required:true
},
type:{
        type:String,
        required:true
},
price:{
        type:Number,
        required:true
    },
size:{
        type:Number,
        required:true
},
capacity:{
        type:Number,
        required:true
},
pets:{
        type:Boolean
},
breakfast:{
         type:Boolean
},
featured:{
        type:Boolean
},
description:{
       type:String
},
numberOfRooms:{
    type:Number,
    default:5

},
extras:[String]
,
images:  [String]

})


const room=mongoose.model("room" ,roomSchema)


export default room