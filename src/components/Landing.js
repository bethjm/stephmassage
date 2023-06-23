import React from "react";

import Header from "./UI/Header";
import Reviews from "./UI/Reviews";
import HomePageServices from "./Landing_Page/HomePageServices";

function Landing() {
  return (
    <div className="landing_page">
      <div className="landing_container">
        <Header />
        <HomePageServices />

        {/* <div className="approach">
          <div className="approach_image">
            <p>IMAGE PLACEHOLDER</p>
          </div>
          <div className="approach_my_approach">
            <h2>My Approach</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              libero felis, porttitor sed est maximus, elementum luctus dolor.
              Vestibulum imperdiet efficitur fermentum.
            </p>
          </div>
          <div className="approach_my_values">
            <h3>My values</h3>
            <ul>
              <li>
                Fusce metus ligula, dapibus sit ametmalesuada vitae, sagittis
                nec ligula.
              </li>
              <li>
                Integer lobortis viverra nibh, vitae euismod eros porttitor ac.{" "}
              </li>
              <li>Sed pellentesque arcu sed felis </li>
            </ul>
          </div>
        </div>

        <Reviews />

        <div className="meet_steph">
          <div className="meet_steph_image">
            <p>IMAGE PLACEHOLDER</p>
          </div>
          <div className="meet_steph_text">
            <p>
              Aliquam erat volutpat. Pellentesque a mattis mi. Nullam varius
              tempor leo at vestibulum. Nunc at mi sit amet purus elementum
              lacinia a vel elit. Quisque erat nulla, eleifend tincidunt
              vehicula ac, accumsan at massa. Pellentesque habitant morbi
            </p>
            <p>
              Suspendisse potenti. Fusce tempor elementum sapien a ullamcorper.
              Pellentesque malesuada tortor vitae velit auctor, id sagittis
              mauris lobortis. Cras sit amet velit vitae nibh rhoncus dapibus.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Landing;
