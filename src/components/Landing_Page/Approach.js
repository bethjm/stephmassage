import React from "react";

import "./Approach.css";

function Approach() {
  return (
    <div className="approach">
      <div className="box">
        <div className="approach_container">
          <div className="approach_image"></div>
          <div className="approach_text">
            <div className="approach_upper_text">
              <h2>My Approach</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                libero felis, porttitor sed est maximus, elementum luctus dolor.
                Vestibulum imperdiet efficitur fermentum. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec libero felis, porttitor
                sed est maximus, elementum luctus dolor. Vestibulum imperdiet
                efficitur fermentum.
              </p>
            </div>
            <div className="approach_lower_text">
              <h2>My values</h2>
              <ul>
                <li>
                  Fusce metus ligula, dapibus sit ametmalesuada vitae, sagittis
                  nec ligula.
                </li>
                <li>
                  Integer lobortis viverra nibh, vitae euismod eros porttitor
                  ac.
                </li>
                <li>Sed pellentesque arcu sed felis </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
