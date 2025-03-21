import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="icon" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+91 62 800 71 704</h2>
            <h2>+91 62 993 10 577</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="icon" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>premkm016@gmail.com</h2>
            <h2>prem78344@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="icon" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Mohali Punjab</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Contact;