// src/pages/Services.js
import React from 'react';
import '../css/services.css';

const Services = () => {
  return (
    <section id="services">
        <div class="services-banner">
            <h2>Services</h2>
        </div>
        <div class="services-container">
            <div class="services-content">
                <div class="dropdown">
                    <button class="dropdown-btn">Business Strategy Development</button>
                    <div class="dropdown-content">
                        Comprehensive analysis and development of a strategic plan to guide your business towards its goals.
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdown-btn">Financial Planning and Analysis</button>
                    <div class="dropdown-content">
                        Expert guidance on budgeting, forecasting, and financial analysis to optimize your financial performance.
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdown-btn">Digital Transformation Consulting</button>
                    <div class="dropdown-content">
                        Assistance with adopting new technologies and integrating them into your business processes to enhance efficiency and competitiveness.
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdown-btn">Market Research and Analysis</button>
                    <div class="dropdown-content">
                        In-depth research and analysis of market trends,customer preferences, and competitive landscape to inform strategic decisions.                    
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdown-btn">Operational Efficiency Improvement</button>
                    <div class="dropdown-content">
                        Evaluation and optimization of your business operations to streamline processes and improve productivity.                    
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdown-btn">Risk Management Solutions</button>
                    <div class="dropdown-content">
                        Identification and mitigation of potential risks to safeguard your business against uncertainties and challenges.                    
                    </div>
                </div>
            </div>

            <div class="services-image">
                <img src="images/WorkFromHome-1024x784.webp" alt="Services Image"/>
            </div>
        </div>
    </section>
  );
};

export default Services;
