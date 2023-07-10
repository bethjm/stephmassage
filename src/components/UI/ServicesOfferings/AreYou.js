import React from "react";

import "./AreYou.css";

function AreYou({ title, Li1, Li2, Li3, Li4, Li5, service }) {
  return (
    <div className="are_you">
      <div className="are_you_container">
        <h1>{title}</h1>
        <ul>
          <li>{Li1}</li>
          <li>{Li2}</li>
          <li>{Li3}</li>
          <li>{Li4}</li>
          <li>{Li5}</li>
        </ul>
        <h3>Then a {service} with Steph is right for you!</h3>
      </div>
    </div>
  );
}

export default AreYou;
