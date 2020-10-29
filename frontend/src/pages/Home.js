import React from "react";
import { Link } from "react-router-dom";
import TopSection from "../components/TopSection";
import Banner from "../components/Banner";
import Services from "../components/Services";
//import FeaturedRooms from "../components/FeaturedRooms";
import RoomCarousal from "../components/RoomCarousal"

const Home = () => {
  return (
    <>
      <TopSection>
          <Banner
                title="deluxe rooms"
                subtitle="rooms starting at $299"  
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
      </TopSection>
      <Services />
      {/* <FeaturedRooms /> */}
      <RoomCarousal/>
    </>
  );
};

export default Home;
