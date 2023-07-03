import React from "react";

import "./GenFAQ.css";

import FAQAPI from "../APIS/FAQAPI";

import Header from "../UI/Header";
import Accordion from "../UI/Accordion/Accordion";
import FAQColumn from "./FAQColumn";

function FAQ() {
  return (
    <>
      <Header />
      <div className="faq">
        <div className="faq_container">
          <FAQColumn />
          <div className="faq_accordion">
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
      </div>
    </>
  );
}

export default FAQ;
