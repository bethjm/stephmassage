import React from "react";
import "./HomePageServices.css";

import yoga_service from "../images/yoga-serv.png";

function Avail_Service() {
  return (
    <div className="services">
      <div className="services_container">
        <h2>Services</h2>
        <div className="all_single_services">
          <div className="single_service">
            <a href="/massage">
              <img src={yoga_service} alt="person doing yoga" />
              <h4>Massage</h4>
            </a>
          </div>
          <div className="single_service">
            <a href="/yoga">
              <img src={yoga_service} alt="person doing yoga" />
              <h4>Yoga</h4>
            </a>
          </div>
          <div className="single_service">
            <a href="/reiki">
              <img src={yoga_service} alt="person doing yoga" />
              <h4>Reiki</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avail_Service;
