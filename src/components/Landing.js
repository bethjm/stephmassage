import React from "react";

import Header from "../components/Headers/LandingHeader";
import Services from "./Services";
import Approach from "./Landing_Page/Approach";
import Reviews from "./Reviews";
import MeetSteph from "./Landing_Page/MeetSteph";

function Landing() {
  return (
    <div className="landing_page">
      <div className="landing_container">
        <Header />
        <Services />
        <Approach />
        <Reviews />
        <MeetSteph />
      </div>
    </div>
  );
}

export default Landing;
