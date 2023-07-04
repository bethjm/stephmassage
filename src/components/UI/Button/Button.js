import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <button
          className="button"
          onClick={props.onClick}
          type={props.type || "button"}
        >
          {props.children}
        </button>
      </a>
    </>
  );
}

export default Button;
