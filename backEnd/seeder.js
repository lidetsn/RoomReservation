import room from "./model/roomsModel.js"
import  data from "./data/data.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDb from "./config/db.js"


dotenv.config()
connectDb()


const importdata=async ()=>{
    try {
        await room.deleteMany()

        await room.insertMany(data)

        console.log("data imported successfully")
        process.exit()
        
    } catch (error) {
        console.log("error in inserting data")
        process.exit(1)
        
    }
}


importdata()



