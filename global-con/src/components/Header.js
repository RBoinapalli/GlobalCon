// src/components/Header.js
import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1>Global IT Consultants</h1>
    </header>
  );
};

export default Header;
