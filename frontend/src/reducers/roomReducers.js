
export  const availableRoomsReducer=(state={rooms:[]},action)=>{
         switch(action.type){
             case "AVAILABLE_ROOMS_SUCCESS":
                 return{ rooms:action.payload}

            default :return state
         }
}

export const featureRoomsReducers=(state={rooms:[]},action)=>{

       switch(action.type){
           case "FEATURE_ROOMS_SUCCESS":
               return {rooms:action.payload}
            default:
                return state
       }
}

export const roomDetailReducers=(state={room:{extras:[],images:[]}},action)=>{

  //  console.log("inside reducer")
    switch(action.type){
        case "ROOM_DETAIL_SUCCESS":
            return {room:action.payload}
         default:
             return state
    }
}

export const sortedRoomsReducers=(state={rooms:[]},action)=>{

    switch(action.type){
        case "SORTED_ROOMS_SUCCESS":
            return {rooms:action.payload}
         default:
             return state
    }
}