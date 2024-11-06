// src/pages/About.js
import React from 'react';
import '../css/about.css';
import ourmission from '../images/ourmission.png';
import ourvision from '../images/ourvision.png';
import ourgoals from '../images/ourgoals.png';

const About = () => {
  return (
    <section id="about">
        <div class="about-banner">
            <h2>About Us</h2>
        </div>
        <div class="about-container">
            <div class="about-card">
                <div class="card-content">
                    <img src={ourmission} alt="Mission Image" class="card-image"/>
                    <div class="card-text">
                        <h4>Our Mission</h4>
                        <p>We provide good career growth opportunities for information technology experts to fulfill their creative thoughts and ideas for business needs.</p>
                    </div>
                </div>
            </div>
            <div class="about-card">
                <div class="card-content">
                    <img src={ourvision} alt="Vision Image" class="card-image"/> 
                    <div class="card-text">
                        <h4>Our Vision</h4>
                        <p>We are a global innovative company that combines information technology expertise with technology to improve your business goals and fulfill end-user needs.</p>
                    </div>
                </div>
            </div>
            <div class="about-card">
                <div class="card-content">
                    <img src={ourgoals} alt="Goal Image" class="card-image"/>
                    <div class="card-text">
                        <h4>Our Goal</h4>
                        <p>We aim to improve user problems, business solutions, products' pain points, and motivations, adopting new artificial technology trends to transform businesses.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
