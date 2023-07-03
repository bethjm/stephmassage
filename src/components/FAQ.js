import React, { Link } from "react";
import "./FAQ.css";

import Header from "./UI/Header";

function FAQ() {
  return (
    <>
      <Header />
      <h1>What do you have questions about?</h1>
      <a href="/faq_general">
        <button>general</button>
      </a>
      <a href="/faq_massage">
        <button>massage</button>
      </a>
      <a href="/faq_yoga">
        <button>yoga</button>
      </a>
      <a href="/faq_reiki">
        <button>reiki</button>
      </a>
      <a href="/faq_cupping">
        <button>cupping</button>
      </a>
    </>
  );
}

export default FAQ;
