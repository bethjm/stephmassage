import React from "react";

import "./IntroService.css";
import Button from "../Button/Button";

function IntroServices({ title, content, link }) {
  return (
    <div className="intro_services">
      <div className="intro_services_container">
        <h1>{title}</h1>
        <p>{content}</p>
        <Button to={link}>Click me!</Button>
      </div>
    </div>
  );
}

export default IntroServices;
