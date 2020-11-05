import React from "react";
import {useSelector} from "react-redux"
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import  RoomDetail from "./pages/RoomDetail";
import BookRoom from "./pages/BookRoom"
import ReservationConfermation from "./pages/ReservationConfermation"
import Error from "./pages/Error";

import Footer from "./components/Footer"
import Header from "./components/Header";

import {BrowserRouter as Router, Route,Switch}  from "react-router-dom"


function App() {

         
  return (
    <Router>
      <Header/>
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/resort/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/confermation/" component={ReservationConfermation} />
        <Route exact path="/book/:slug" component={BookRoom}/>
        <Route exact path="/rooms/:slug" component={ RoomDetail} />
        <Route component={Error} />
               
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;


