// src/pages/Home.js
import React from 'react';
import '../css/home.css';

const Home = () => {
  return (
    <section id="home">
        <div class="banner">
            <div class="banner-content">
                <h2>WE ARE THINKING TO IMPROVE YOUR PRODUCTS</h2>
            </div>
        </div>
        <div class="info">
            <h3>WHAT SETS US APART</h3>
            <div class="badges">
                <div class="badge">
                    <h1>&#128295;</h1>
                    <p>Real-world-tested strategies, methods, and programs</p>
                </div>
                <div class="badge">
                    <h1>&#128075;</h1>
                    <p>True collaboration from strategy to execution</p>
                </div>
                <div class="badge">
                    <h1>&#128200;</h1>
                    <p>Data-driven insights uncover growth opportunities</p>
                </div>
                <div class="badge">
                    <h1>&#128084;</h1>
                    <p>Practice leaders with decades of experience</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
