import {createStore,combineReducers,applyMiddleware} from "redux"
import   thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { roomReservationReducers} from "./reducers/reservationreducers"
 
import {availableRoomsReducer,
        featureRoomsReducers,
        roomDetailReducers,
        sortedRoomsReducers} from "./reducers/roomReducers"


const reducers=combineReducers({availableRooms:availableRoomsReducer,
                                 featureRooms:featureRoomsReducers,
                                 roomDetail:roomDetailReducers,
                                 sortedRooms:sortedRoomsReducers,
                                 roomReservation: roomReservationReducers

                                })
const middlewear=[thunk]

const store =createStore(reducers,composeWithDevTools(applyMiddleware(...middlewear)))


export default store