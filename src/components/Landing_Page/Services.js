import React from "react";
import "./Services.css";

import yoga from "../images/yoga2.jpg";
import massage from "../images/massage2.jpg";
import reiki from "../images/reiki2.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services_container">
        <h2>Services</h2>
        <div className="all_single_services">
          <div className="single_service">
            <a href="/massage">
              <img src={massage} alt="person doing yoga" />
              <h4>Massage</h4>
            </a>
          </div>
          <div className="single_service">
            <a href="/yoga">
              <img src={yoga} alt="person doing yoga" />
              <h4>Yoga</h4>
            </a>
          </div>
          <div className="single_service">
            <a href="/reiki">
              <img src={reiki} alt="person doing yoga" />
              <h4>Reiki</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
