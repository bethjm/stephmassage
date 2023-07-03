import React from "react";

import "./GenFAQ.css";

import FAQAPI from "../APIS/FAQAPI";

import Header from "../UI/Header";
import Accordion from "../UI/Accordion/Accordion";

function FAQ() {
  return (
    <div className="faq">
      <Header />
      <div className="faq_container">
        <Accordion>
          {FAQAPI.general.map(({ question, answer }) => {
            return (
              <Accordion.Item key={question}>
                <Accordion.Collapsed id={question}>
                  {question}
                </Accordion.Collapsed>
                <Accordion.Expanded>{answer}</Accordion.Expanded>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
