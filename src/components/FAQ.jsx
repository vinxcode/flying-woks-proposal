import IndividualQuestion from './IndividualQuestion'
import React from 'react'

const faqs = [
    {
      question: "Where is Thai Woks located?",
      answer: "We are located in the heart of Melbourne at 123 Queen St, Melbourne, VIC 3000."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we offer home delivery within a 10km radius of our restaurant. You can order directly through our website or through delivery platforms."
    },
    {
      question: "What are your opening hours?",
      answer: "Our restaurant is open from Monday to Friday, 11:00 AM to 10:00 PM, and on weekends from 12:00 PM to 11:00 PM."
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer: "Yes, we offer a variety of vegetarian and vegan options on our menu. Please check the 'Special Diet' section for more details."
    },
    {
      question: "Do you have gluten-free options?",
      answer: "Yes, we have several gluten-free dishes available. Please inform our staff if you have any dietary restrictions."
    },
    {
      question: "How can I make a reservation?",
      answer: "You can make a reservation by calling us at (03) 1234 5678 or through our online reservation system on our website."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have a dedicated parking area for our customers located behind the restaurant."
    },
    {
      question: "Do you cater for events or large groups?",
      answer: "Yes, we offer catering services for events and large groups. Please contact us for more information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash. You can also pay through popular payment apps like PayPal and Apple Pay."
    },
    {
      question: "Can I order takeaway?",
      answer: "Yes, we offer takeaway services. You can order by calling us or through our website, and your meal will be ready for pickup."
    },
    {
      question: "Do you have any promotions or discounts?",
      answer: "We offer various promotions and discounts throughout the year. Follow us on social media or sign up for our newsletter to stay updated."
    },
  ];
  

const FAQSection = () => {
    return (
        <div className="faq-section p-8 bg-white shadow-lg rounded-none lg:rounded-lg  text-black bg-opacity-20 backdrop-filter
        backdrop-blur-lg mb-20">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div>
            {faqs.map((faq, index) => (
                <IndividualQuestion 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                />
            ))}
            </div>
        </div>
    );
};

export default FAQSection