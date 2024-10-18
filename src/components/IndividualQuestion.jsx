import React, { useState } from 'react';

const IndividualQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item mb-4">
      {/* Título de la pregunta con el toggle */}
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-semibold">
          {question}
        </h3>
        <span className="text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </div>

      {/* Respuesta con animación */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-2 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default IndividualQuestion;
