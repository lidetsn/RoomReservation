import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {Carousel,Image} from "react-bootstrap"

import {getAllfeaturedRooms} from "../action/availableRoomsActions"

const RoomCarousal= () => {
const dispatch=useDispatch()
const  featureRooms=useSelector(state=>state.featureRooms)
const {rooms}= featureRooms

useEffect(()=>{
    dispatch(getAllfeaturedRooms())
},[dispatch])


    // return   loading?(<Loader/>):error?(<Message variant="danger">{error}</Message>
    //       ):(    
        return   <Carousel pause="hover" className="">
                      {rooms.map((room)=>(
                            <Carousel.Item key={room._id}>
                                <Link to={`/rooms/${room.slug}`}>
                                    <Image src={room.images[0]} alt={room.name}    className="d-block  " fluid />
                                    <Carousel.Caption className="carousel-caption">
                                            <h4>{room.slug}(${room.price })</h4>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
     ) )}
</Carousel>
    

    
    
}

export default RoomCarousal


