import mongoose from "mongoose"


const connectDb=async ()=>{

    try {
        const conn= await mongoose.connect(process.env.MONGO_URI,{useCreateIndex: true,useNewUrlParser: true, useUnifiedTopology: true, })
        console.log("db connected successfuly")
        
    } catch (error) {
        console.log(error)
        
    }

        

}

export default connectDb


