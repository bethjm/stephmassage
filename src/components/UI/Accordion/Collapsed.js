import React from "react";

import "./Collapsed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Collapsed = ({ children, handleOpen, id, isOpen }) => {
  const iconClassName = isOpen ? "rotate-icon" : "";

  return (
    <div style={styles} onClick={handleOpen} data-id={id}>
      {children}
      <FontAwesomeIcon icon={faPlus} className={iconClassName} />
    </div>
  );
};

const styles = {
  color: "#007bff", // blue
  background: "rgba(0, 0, 0, 0.075)", // gray
  padding: "15px 15px",
};

export default Collapsed;
