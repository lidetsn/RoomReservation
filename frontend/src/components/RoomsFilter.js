import React ,{useState,useEffect}from "react";
import {useDispatch,useSelector} from "react-redux"
import Title from "./Title";
import {getsortedRooms,
        getAllAvailablerooms} from "../action/availableRoomsActions"

// get all unique values


//class RoomsFilter extends React.Component
const RoomsFilter = () =>

 {              const[roomProperty,setRoomProperty]=useState({type:"",
                                                              capacity:1,
                                                              price:0,
                                                              minSize:0,
                                                              maxSize:0,
                                                              breakfast:true,
                                                              pets:true})
                        // const [type, setType] = useState("")
                        // const [capacity, setCapacity] = useState(0)
                        // const [price, setPrice] = useState(0)
                        // const [minSize, setMinSize] = useState(0)
                        // const [maxSize, setMaxSize] = useState(0)
                        // const [breakfast, setBreakfast] = useState("")
                        // const [pets, setPets] = useState(true)
                        const dispatch=useDispatch()
                        const availableRooms = useSelector(state => state.availableRooms)
                        const {rooms}=availableRooms
                      

              useEffect(()=>{
                dispatch(getAllAvailablerooms())
            },[dispatch])

                
  const handleChange = event => {
  
          const target = event.target;
          const value = target.type === "checkbox" ? target.checked : target.value;
          const name = target.name;

                dispatch( getsortedRooms(name,value))

                setRoomProperty({...roomProperty,[name]:value})     
  } 
  
  // get unique types
  const getUnique = (items, value) => {
               return [...new Set(items.map(item => item[value]))];
               }
 

  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))

  // get unique capacity
  let people = getUnique(rooms, "capacity");
          people = people.map((item, index) => (
                   <option key={index} value={item}>
                            {item}
                  </option>
                 ))


  return (
    <>
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
            {/* select type */}
            <div className="form-group">
              <label htmlFor="type">room type</label>
              <select
                      name="type"
                      id="type"
                      onChange={handleChange}
                      className="form-control"
                      value={roomProperty.type}
              >
                {types}
              </select>
            </div>
            {/* end of select type */}
            {/* guests  */}
            <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                          name="capacity"
                          id="capacity"
                          onChange={handleChange}
                          className="form-control"
                          value={roomProperty.capacity}
                        >
                          {people}
                    </select>
            </div>
            {/* end of guests */}
            {/* room price */}
            <div className="form-group">
                  <label htmlFor="price">room price ${roomProperty.price}</label>
                  <input
                    type="range"
                    name="price"
                    // min={minPrice}
                    // max={maxPrice}
                    id="price"
                    value={roomProperty.price}
                    onChange={handleChange}
                    className="form-control"
                  />
            </div>
            {/* end of room price*/}
            {/* size */}
            <div className="form-group">
                  <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                          <input
                            type="number"
                            name="minSize"
                            value={roomProperty.minSize}
                            onChange={handleChange}
                            className="size-input"
                          />
                          <input
                            type="number"
                            name="maxSize"
                            value={roomProperty.maxSize}
                            onChange={handleChange}
                            className="size-input"
                          />
                    </div>
            </div>
            {/* end of select type */}
            {/* extras */}
            <div className="form-group">
                    <div className="single-extra">
                          <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={roomProperty.breakfast}
                            onChange={handleChange}
                          />
                          <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                          <input
                            type="checkbox"
                            name="pets"
                            checked={roomProperty.pets}
                            onChange={handleChange}
                          />
                        <label htmlFor="breakfast">pets</label>
                    </div>
            </div>
            {/* end of extras type */}
          
      </form>
      
   </section>

   </>

  );
};

export default RoomsFilter
