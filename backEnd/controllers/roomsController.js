import mongoose from "mongoose"
import Room from "../model/roomsModel.js"



const getAllRooms=async (req,res,next)=>{
    try {
       const rooms= await Room.find()
         if(rooms){
             res.status(200).json(rooms)
         }
         else{
         throw new Error("No rooms to display please try again")
         
         }
        
    } catch (error) {
        console.log("internal server error")
        next(error)
        
    }
       
}

const getFeaturedRoooms=async (req,res,next)=>{
        try {
            
            const rooms=await Room.find({featured:true})
            if(rooms){
                res.status(200).json(rooms)
            }
            else{
                throw new Error("no rooms to dispaly")
            }
        } catch (error) {
            console.log("internal server error")
            next(error)
            
        }
}

const getRoomDetail=async (req,res,next)=>{
        try {
            const slug=req.params.slug
            const room=await Room.findOne({slug:slug})
            if(room){
                console.log(room)
                res.status(200).json(room)
            }
            else{
                throw new Error("no room found")
            }
        } catch (error) {
             console.log("internal server error")
             next(error)
        }
}

export {
    getAllRooms,
    getFeaturedRoooms,
    getRoomDetail
}