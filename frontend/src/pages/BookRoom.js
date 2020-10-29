import React ,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import { Form, Button } from "react-bootstrap"

import {reserveRoom} from "../action/roomReservationActions"

const BookRoom = ({ match,history }) => {

    const slug=match.params.slug

          const[guestInfo,setGuestInfo]=useState({checkIn:"",
                                                   checkOut:"",
                                                   firstName:"",
                                                   lastName:"",
                                                   email:"",
                                                  confirmEmail:""})
                   const dispatch=useDispatch()
const handleOnChange=(e)=>{
                  const {name,value}=e.target

        setGuestInfo({...guestInfo,[name]:value})


}

    const submitHandler = (e) => {
                    e.preventDefault()
                    dispatch(reserveRoom(guestInfo,slug))

                    setGuestInfo({checkIn:"",
                                    checkOut:"",
                                    firstName:"",
                                    lastName:"",
                                    email:"",
                                    confirmEmail:""})


                        history.push("/confermation")

                        // console.log(guestInfo)
        
    }
    return (
        <div className="booking_Main">
            <h1>Add Guest Information</h1>

            <Form onSubmit={submitHandler} className="booking_form">
                <div className="booking_date">
                    <Form.Group controlId="address">
                        <Form.Label>check in date</Form.Label>
                        <Form.Control
                            type="date" data-date-inline-picker="true"
                            placeholder="Enter your first name" required
                            name="checkIn"
                            value={guestInfo.checkIn}
                            onChange={handleOnChange}

                        >

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>check out date</Form.Label>
                        <Form.Control
                            type="date" data-date-inline-picker="true"
                            placeholder="Enter your first name" required
                            name="checkOut"
                            value={guestInfo.checkOut}
                            onChange={handleOnChange}
                        >

                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="booking_guest_info">
                    <Form.Group controlId="address">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name" required
                            name="firstName"
                            value={guestInfo.firstName}
                            onChange={handleOnChange}
                        >

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Last name"
                            name="lastName"
                            value={guestInfo.lastName}
                            onChange={handleOnChange}
                        >

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Email" required
                            name="email"
                            value={guestInfo.email}
                            onChange={handleOnChange}
                        >

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>confirm Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="re enter your email" required
                            name="confirmEmail"
                            value={guestInfo.confirmEmail}
                            onChange={handleOnChange}
                        >

                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">Book Now</Button>
                </div>
            </Form>

        </div>
    )
}

export default BookRoom
