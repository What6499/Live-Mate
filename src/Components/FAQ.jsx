import React, { useState } from "react";

const faqs = [
  {
    question: "What is liveMate?",
    answer: "liveMate is a platform that helps users find suitable roommates and shared accommodations."
  },
  {
    question: "How do I create a listing?",
    answer: "Log in to your account, go to 'Find Roommate', and fill in the listing form to publish your post."
  },
  {
    question: "Is my personal information visible to everyone?",
    answer: "Your contact number is only visible when someone likes your post. Your email remains private."
  },
  {
    question: "Can I delete my listing later?",
    answer: "Yes, you can manage and delete your listings from the 'My Listings' section."
  },
  {
    question: "What happens when I like a listing?",
    answer: "The poster's contact number becomes visible so you can get in touch."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-10/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
            <button
              className="w-full flex justify-between items-center p-4 font-medium text-left  focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
