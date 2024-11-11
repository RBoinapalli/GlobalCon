// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span>{isOpen ? '☰' : '☰'}</span>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/jobs" onClick={toggleMenu}>Jobs</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/admin" onClick={toggleMenu}>Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
