import React, { useState } from "react";
import "./FAQsPage.css";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is CodeLive?",
      answer:
        "CodeLive is a real-time code-sharing platform designed to empower developers to collaborate and debug efficiently.",
    },
    {
      question: "Is CodeLive free to use?",
      answer:
        "Yes, CodeLive offers a free plan with essential features. Advanced plans are available for teams and enterprises.",
    },
    {
      question: "How secure is my code on CodeLive?",
      answer:
        "CodeLive ensures top-notch security with encrypted connections and secure storage to protect your data.",
    },
    {
      question: "Can I integrate CodeLive with other tools?",
      answer:
        "Yes, CodeLive supports integrations with popular developer tools and version control systems.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
