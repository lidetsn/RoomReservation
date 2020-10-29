import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import Room from "./Room";
import Title from "./Title";
import {getAllfeaturedRooms} from "../action/availableRoomsActions"

// import Loading from "./Loading";


 const FeaturedRooms =() =>{
        const dispatch = useDispatch()
        const  featureRooms=useSelector(state=>state.featureRooms)
        const {rooms}=featureRooms

        
        //let { loading, featuredRooms: rooms } = this.context;
          useEffect(()=>{
               dispatch(getAllfeaturedRooms())
          },[dispatch])

    
   
 return (
      <section className="featured-rooms">
           <Title title="featured rooms" />
           <div className="featured-rooms-center">
                {/* {loading ? <Loading /> : rooms} */}
                {rooms.map(room => (
               <Room key={room.id} room={room} /> ))}
           </div>
      </section>
    );
  }


export default FeaturedRooms
