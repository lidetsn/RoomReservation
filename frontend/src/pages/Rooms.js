import React from "react";
import TopSection from "../components/TopSection";
import Banner from "../components/Banner";
// import {Link} from "react-router-dom"
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <TopSection hero="roomsHero">
        <Banner title="our rooms">
          {/* <Link to="/" className="btn-primary">
            return home
          </Link> */}
        </Banner>
      </TopSection>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
