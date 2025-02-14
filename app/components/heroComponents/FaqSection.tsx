import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

type FAQSection = 'Eligibility' | 'How To Use?' | 'Terms & Conditions';
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: Record<FAQSection, FAQItem[]> = {
  'Eligibility': [
    {
      question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
      answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
    },
    {
      question: 'What is the minimum system configuration required?',
      answer: 'The system requirements vary based on the program modules and tools used.'
    }
  ],
  'How To Use?': [
    {
      question: 'How do I access the course materials?',
      answer: 'You can access all course materials through our learning platform after enrollment.'
    }
  ],
  'Terms & Conditions': [
    {
      question: 'What are the payment terms?',
      answer: 'We offer flexible payment options including full payment and EMI options.'
    }
  ]
};

const FAQComponent = () => {
  const [activeSection, setActiveSection] = useState<FAQSection>('Eligibility');
  const [expandedQuestion, setExpandedQuestion] = useState<string>(
    'Do I need to have prior Product Management and Project Management experience to enroll in the program?'
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 font-semibold lg:mb-20 mb-8">
      <h1 className="text-2xl font-semibold text-center mb-8">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 space-y-3">
          {(Object.keys(faqs) as FAQSection[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-full px-6 py-3 text-center rounded-lg border transition-colors
                ${
                  activeSection === section
                    ? 'border-blue-500 text-blue-500 bg-white shadow-sm'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }
              `}
            >
              {section}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="flex-1 space-y-4">
          {faqs[activeSection].map((faq) => (
            <div
              key={faq.question}
              className=" rounded-lg hover:border-gray-300 transition-colors"
            >
              <button
                onClick={() => setExpandedQuestion(
                  expandedQuestion === faq.question ? '' : faq.question
                )}
                className="w-full px-6 py-4 flex justify-between items-center"
              >
                <span className={`text-left ${
                  expandedQuestion === faq.question ? 'text-blue-500' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                {expandedQuestion === faq.question ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {expandedQuestion === faq.question && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;