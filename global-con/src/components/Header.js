// src/components/Header.js
import React from 'react';
import '../css/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Global IT Consultants</h1>
      </div>
    </header>
  );
};

export default Header;
