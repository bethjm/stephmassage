import React from "react";

import "./IntroService.css";
import Button from "../Button/Button";

function IntroServices({ title, p1, p2, link }) {
  return (
    <div className="intro_services">
      <h1>{title}</h1>

      <div className="intro_services_container">
        <p>{p1}</p>
        <p>{p2}</p>
        <Button to={link} color="var(--dark-blue)">
          Book a session
        </Button>
      </div>
    </div>
  );
}

export default IntroServices;
