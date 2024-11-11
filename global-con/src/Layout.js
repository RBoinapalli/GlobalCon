// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Admin from './pages/Admin';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './css/index.css';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
