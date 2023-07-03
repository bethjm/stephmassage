import React from "react";

import "./Collapsed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Collapsed = ({ children, handleOpen, id, isOpen }) => {
  const iconClassName = isOpen ? "rotate-icon" : "";

  return (
    <div className="collapsed_container" onClick={handleOpen} data-id={id}>
      {children}
      <FontAwesomeIcon icon={faPlus} className={iconClassName} />
    </div>
  );
};

export default Collapsed;
