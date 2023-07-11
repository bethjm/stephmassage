import React from "react";
import FAQAPI from "../../../APIS/FAQAPI";
import Accordion from "../../Accordion/Accordion";

import FAQServiceColumn from "./FAQServiceColumn";

import "./MiniFAQ.css";

function ReikiFAQ() {
  // Specify the question IDs you want to display
  const questionIds = [2, 4, 5, 6];

  // Create an empty array to store the mapped elements
  const mappedElements = [];

  // Access the 'massage' category directly from the FAQAPI
  const reikiCategory = FAQAPI.reiki;

  // Filter the questions based on the specified question IDs
  const filteredQuestions = reikiCategory.filter((question) =>
    questionIds.includes(Number(question.id))
  );

  // Map the filtered questions to create the desired elements
  const elements = filteredQuestions.map((question) => {
    return {
      question: question.question,
      answer: question.answer,
    };
  });

  // Concatenate the mapped elements to the main array
  mappedElements.push(...elements);

  return (
    <div className="mini_FAQ">
      <div className="mini_FAQ_container">
        <div className="mini_FAQ_column">
          <FAQServiceColumn />
        </div>
        <div className="mini_FAQ_accordion">
          <Accordion accordionWidth="100%">
            {mappedElements.map(({ question, answer }) => (
              <Accordion.Item key={question}>
                <Accordion.Collapsed id={question}>
                  {question}
                </Accordion.Collapsed>
                <Accordion.Expanded>{answer}</Accordion.Expanded>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ReikiFAQ;