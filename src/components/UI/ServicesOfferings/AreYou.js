import React from "react";

import "./AreYou.css";

function AreYou({ Li1, Li2, Li3, Li4, Li5, service }) {
  return (
    <div className="are_you">
      <div className="are_you_container">
        <h2>Do you struggle with...</h2>
        <ul>
          <li>{Li1}</li>
          <li>{Li2}</li>
          <li>{Li3}</li>
          <li>{Li4}</li>
          <li>{Li5}</li>
        </ul>
        <h4>Then {service} is right for you!</h4>
      </div>
    </div>
  );
}

export default AreYou;
