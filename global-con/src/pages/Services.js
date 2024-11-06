// src/pages/Services.js
import React, { useState } from 'react';
import '../css/services.css';
import WorkFromHome from '../images/WorkFromHome-1024x784.webp';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle visibility of the description for the clicked service
    setActiveIndex(activeIndex === index ? null : index);
  };

  const servicesData = [
    {
      title: 'Business Strategy Development',
      description: 'Comprehensive analysis and development of a strategic plan to guide your business towards its goals.',
    },
    {
      title: 'Financial Planning and Analysis',
      description: 'Expert guidance on budgeting, forecasting, and financial analysis to optimize your financial performance.',
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Assistance with adopting new technologies and integrating them into your business processes to enhance efficiency and competitiveness.',
    },
    {
      title: 'Market Research and Analysis',
      description: 'In-depth research and analysis of market trends, customer preferences, and competitive landscape to inform strategic decisions.',
    },
    {
      title: 'Operational Efficiency Improvement',
      description: 'Evaluation and optimization of your business operations to streamline processes and improve productivity.',
    },
    {
      title: 'Risk Management Solutions',
      description: 'Identification and mitigation of potential risks to safeguard your business against uncertainties and challenges.',
    },
  ];

  return (
    <section id="services">
      <div className="services-banner">
        <h2>Services</h2>
      </div>
      <div className="services-container">
        <div className="services-content">
          {servicesData.map((service, index) => (
            <div key={index} className="dropdown">
              <button className="dropdown-btn" onClick={() => handleToggle(index)}>
                {service.title}
              </button>
              {/* Conditionally render the content if activeIndex matches current index */}
              {activeIndex === index && (
                <div className="dropdown-content">
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="services-image">
          <img src={WorkFromHome} alt="Services Image" />
        </div>
      </div>
    </section>
  );
};

export default Services;
