import express from "express"

import reserveRoom from "../controllers/reserveController.js"

const router=express.Router()


router.route("/")
                  .post(reserveRoom)


 export default router