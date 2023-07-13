import React from "react";

import "./Button.css";

function Button(props) {
  const buttonStyle = {
    backgroundColor: props.color || "var(--pink)",
    borderColor: props.color || "var(--pink)",
    "--button-hover-color": props.hoverColor || "var(--dark-blue)",
  };

  return (
    <>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <button
          className="button"
          onClick={props.onClick}
          type={props.type || "button"}
          style={buttonStyle}
        >
          {props.children}
        </button>
      </a>
    </>
  );
}

export default Button;
