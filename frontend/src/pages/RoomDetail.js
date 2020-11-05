
import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {getRoomDetail} from "../action/availableRoomsActions"

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import {Row,Col,ListGroup,Card,Button} from  "react-bootstrap"

import {DetailHeader}from "../components/UpperStyle";



const RoomDetail=({match,history})=> { 
  const sl=match.params.slug
           
       const dispatch = useDispatch()               
       const roomDetail= useSelector(state => state.roomDetail)
       const {room}=roomDetail
      
             
useEffect(() => {
       dispatch(getRoomDetail(sl))
}, [dispatch,sl])

    const handleBooking=()=>{
            history.push(`/book/${sl}`)
    }

    return (
      <>

      { room===null ?( <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>): (     <> 
        <DetailHeader img={room.images[0]}>
           <>
          <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
           </>
        </DetailHeader>

        <section className="show-room">
                <div className="show-room-images">
                  {room.images.map((item, index) =>
                            index !==0? (
                              <img key={index} src={item} alt={room.name} />
                            ):null)}
                            </div>
                  
        </section>
        <section className="room-extras">    
            {/* <div className="show-room-info"> */}
                 <Row  >
                      <Col md={5}>
                            <ListGroup variant="flush">
                                <ListGroup.Item  className="desc">
                                      {/* <article className="desc"> */}
                                            <h3>details</h3>
                                            <p>{room.description}</p>
                                      {/* </article> */}
                                  </ListGroup.Item>
                                </ListGroup>
                      </Col>
                
                  <Col md={3}>
                      <ListGroup variant="flush">
                          <ListGroup.Item>
                             {/* <article className="info"> */}
                                  <h3>info</h3>
                                  <h6>price : ${room.price}</h6>
                                  <h6>size : {room.size} SQFT</h6>
                                  <h6>
                                    max capacity :
                                    {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}
                                  </h6>
                                  <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                                  <h6>{room.breakfast && "free breakfast included"}</h6>
                              {/* </article> */}
                          </ListGroup.Item>
                       </ListGroup>
                   </Col>
                   <Col md={4}>
                     <Card>
                   <ListGroup variant="flush">
                    <ListGroup.Item>
                   {/* <article> */}
                     <h3>book Fast</h3>
                     <strong> only 3 rooms left</strong>
                   {/* </article> */}
                   </ListGroup.Item>
                   <ListGroup.Item>
                          <Button type="button" className="btn btn-block" onClick={handleBooking}>
                              Book
                          </Button>
                    </ListGroup.Item>
                   </ListGroup>
                   </Card>
                   </Col>
                 </Row>
             {/* </div> */}
        </section>
        <section className="room-extras">
                <h6>extras </h6>
                <ul className="extras">
                  {room.extras.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
        </section> 
        </>)}
      </>
    );
  
}

export default RoomDetail