import React from 'react'
import {useSelector} from "react-redux"
import Loader from "../components/Loader"

 const ReservationConfermation = () => {

                    const  roomReservation = useSelector(state => state. roomReservation)
                     const {success,flag}= roomReservation

                    console.log(success)

    return (
              <>
              {!success? (<><h3>please waite till we complete your reservation</h3><Loader/></>):

              
              
        
       ( <div  className="reservationConfermation">
            
            <h1>Thank you for your reservation</h1> 
            <p>you Got the best rate</p>

            <p>We have sent you the confermation detail through your email</p>
            <p>check your email for detail</p>
        </div>) }
        </>
    )
}

export default ReservationConfermation
