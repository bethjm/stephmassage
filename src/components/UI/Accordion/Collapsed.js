import React from "react";

import "./Collapsed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Collapsed = ({
  children,
  handleOpen,
  id,
  isOpen,
  color,
  backgroundColor,
}) => {
  const iconClassName = isOpen ? "rotate-icon" : "";

  const containerStyle = {
    color: color || "var(--text)",
    background: backgroundColor || "rgba(218, 188, 180, 0.9)",
  };

  return (
    <div
      className="collapsed_container"
      onClick={handleOpen}
      data-id={id}
      style={containerStyle}
    >
      {children}
      <FontAwesomeIcon icon={faPlus} className={iconClassName} />
    </div>
  );
};

export default Collapsed;
