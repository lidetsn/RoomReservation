import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import path from "path"

import RoomRouter from "./routes/roomRoutes.js"
import ReserveRouter from "./routes/reserveRouter.js"




const App=express()
const PORT=process.env.PORT|| 2000

dotenv.config()
connectDb()
App.use(express.json())


const __dirname = path.resolve()
App.use('/images', express.static(path.join(__dirname, '/backEnd/public/images')))
App.use('/services', express.static(path.join(__dirname, '/backEnd/public/services')))



App.use("/api/rooms/",RoomRouter)
App.use("/api/reserve/",ReserveRouter)



App.listen(PORT,()=>{
    console.log(`app is now running visite http://localhost:${PORT}`)
})