import React from "react";

import FAQAPI from "./APIS/FAQAPI";

import Header from "./UI/Header";
import Accordion from "./UI/Accordion/Accordion";

function FAQ() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default FAQ;
