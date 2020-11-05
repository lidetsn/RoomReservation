import axios from "axios"


export const reserveRoom = (guestInfo, slug) => async (dispatch) => {
  try {

    const reservationdata = {
      firstName: guestInfo.firstName,
      lastName: guestInfo.lastName,
      email: guestInfo.email,
      checkIn: guestInfo.checkIn,
      checkOut: guestInfo.checkOut,
      roomType: slug
    }

    const config = {
      headers: {
        "content-Type": "application/json"
      }
    }
    const { status } = await axios.post("/api/reserve", reservationdata, config)
    console.log(status)
    if (status === 200) {

      dispatch({
        type: "RESERVATION_SUCCESS",

      })
    }
    else {
      dispatch({
        type: "RESERVATION_FAIL",

      })
    }

  } catch (error) {
    console.log(error)
    dispatch({
      type: "RESERVATION_FAIL",
      payload: error
    })

  }

}