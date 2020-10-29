import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import Room from "./Room";
import {getsortedRooms} from "../action/availableRoomsActions"




const RoomsList = () => {

                        const sortedRooms=useSelector(state=>state.sortedRooms)
                          const    {rooms} =sortedRooms
                          const dispatch = useDispatch()

useEffect(() => {
dispatch(getsortedRooms())
 }, [dispatch])
                                                  
                        
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item._id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
