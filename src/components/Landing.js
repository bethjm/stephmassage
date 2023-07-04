import React from "react";

import Header from "../components/Headers/LandingHeader";
import HomePageServices from "./Landing_Page/HomePageServices";
import Approach from "./Landing_Page/Approach";
import Reviews from "./Reviews";
import MeetSteph from "./Landing_Page/MeetSteph";

function Landing() {
  return (
    <div className="landing_page">
      <div className="landing_container">
        <Header />
        <HomePageServices />
        <Approach />
        <Reviews />
        <MeetSteph />
      </div>
    </div>
  );
}

export default Landing;
