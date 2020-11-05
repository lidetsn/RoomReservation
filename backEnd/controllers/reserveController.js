import Guest from "../model/guestModel.js"



const reserveRoom=async (req,res,next)=>{
    try {
         const confermation=   await Guest.create(req.body)

         res.status(200).json({conf:true})
        
    } catch (error) {
        next(error)
        
    }

}

export default reserveRoom