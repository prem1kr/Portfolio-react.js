import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1><span>P</span>rem <span>K</span>umar</h1>
        </div>
        <h2>Your Complete Web Solution</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://www.linkedin.com/in/prem-kumar-3b38b1290/"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="icon" /></a>
          </div>
          <div className="social-item">
            <a href="https://github.com/prem1kr?tab=repositories"><img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="icon" /></a>
          </div>
        </div>
        <p>Copyright © 2025 Prem kumar. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;