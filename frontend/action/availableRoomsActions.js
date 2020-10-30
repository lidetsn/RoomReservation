//import avrooms from "../data/data"
import axios from "axios"


export const getAllAvailablerooms= ()=>async (dispatch)=>{
          try {
                const {data}=await axios.get("/api/rooms")
                
                dispatch({
                  type:"AVAILABLE_ROOMS_SUCCESS",
                  payload:data
            })
            
          } catch (error) {
            console.log(error)
            
          }
                   
    
}

export const getAllfeaturedRooms=()=>async (dispatch)=>{
         try {
          const {data}=await axios.get("/api/rooms/featuredrooms")
     //     console.log(data)
              // let featuredRooms = avrooms.filter(room => room.featured === true);
               //
                //  let maxPrice = Math.max(...rooms.map(item => item.price));
                //  let maxSize = Math.max(...rooms.map(item => item.size));
                //  this.setState({
                //    rooms,
                //    featuredRooms,
                //    sortedRooms: rooms,
                //    loading: false,
                //    //
                //    price: maxPrice,
                //    maxPrice,
                //    maxSize
                //  });
       
          dispatch({
              type:"FEATURE_ROOMS_SUCCESS",
              payload:data
          })
           
         } catch (error) {
           console.log(error)
         }
         
       
}

export const getRoomDetail=(slug)=>async (dispatch)=>
{
               try {
                 const {data}=await axios.get(`/api/rooms/${slug}`)
                //  let tempRooms = [...avrooms];
                //   const room = tempRooms.find(room => room.slug === slug);
                  dispatch({
                      type: "ROOM_DETAIL_SUCCESS",
                      payload:data
                  })
                 
               } catch (error) {
                 
               }


    
  
}


export const getsortedRooms=(name="",value="")=>async (dispatch)=>

{
            try {
              const {data}=await axios.get("/api/rooms")

              const  filterRooms = (name,value) => {
                console.log(name)
                console.log(value)
                
            
                let tempRooms = [...data];
                if (name==="type"  && value!== "all") {
                  console.log("head up")
                  tempRooms = tempRooms.filter(room => room.type === value);
                  console.log(tempRooms)
                  
                }
                // filter by capacity
                if (name ==="capacity" && value !== 1) {
                  tempRooms = tempRooms.filter(room => room.capacity >= value);
                }
                // filter by price
                //tempRooms = tempRooms.filter(room => room.price <= price);
                //filter by size
                //tempRooms = tempRooms.filter(
                 // room => room.size >= minSize && room.size <= maxSize
                //)
                //filter by breakfast
                if (name==="breakfast" && value===true) {
                  tempRooms = tempRooms.filter(room => room.breakfast === true);
                }
                //filter by pets
                if (name==="pets" && value===true) {
                  tempRooms = tempRooms.filter(room => room.pets === true);
                }
                // this.setState({
                //   sortedRooms: tempRooms
                // });
                    return tempRooms
               // sortedRooms=[...tempRooms]
              }
              //console.log(sortedRooms)
              const sortedRooms=filterRooms(name,value)
     //       console.log(sortedRooms)
                 dispatch({
                    type: "SORTED_ROOMS_SUCCESS",
                    payload: sortedRooms
                 })
              
            } catch (error) {
               console.log(error)
              
            }


  
  
}
