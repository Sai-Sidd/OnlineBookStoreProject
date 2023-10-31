// FAQ.jsx
import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'Is there a minimum order value for free shipping?',
      answer: 'Yes, we offer free shipping for orders above a certain minimum order value. Check our shipping policy for more details.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support by emailing onlinebookstore@gmail.com or by calling our helpline at +91 9841230422.'
    },
    {
      question: 'What should I do if I receive a damaged item?',
      answer: 'If you receive a damaged item, please contact our customer support with photos of the damaged product, and we will assist you with the return process.'
    },
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows for returns within 30 days of the purchase date. Please review our Returns & Exchanges policy for detailed information.'
    },
    // Add more questions and answers as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <div
              className={`question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {item.question}
              <div className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#9660;</div>
            </div>
            {activeIndex === index && <div className="answer">{item.answer}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
