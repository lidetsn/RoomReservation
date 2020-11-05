export const roomReservationReducers=(state={success:false},action)=>{

    switch(action.type){
        case "RESERVATION_SUCCESS":
            return {loading:false,success:true,}
            case "RESERVATION_FAIL":
                return {loading:false,error:action.payload,flag:"green"}      
               default:
             return state
    }
}




    
