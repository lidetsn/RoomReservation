import express from "express"

import {getAllRooms,
       getFeaturedRoooms,
       getRoomDetail} from "../controllers/roomsController.js"

const router =express.Router()


router.route("/")
          .get(getAllRooms)

router.route("/featuredrooms")
.get(getFeaturedRoooms)

router.route("/:slug")
.get(getRoomDetail)

export default router