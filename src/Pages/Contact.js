import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const URL = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch(`${URL}/api/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };
  
 

  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">Contact <span>info</span></h1>
        </div>
        <div className="contact-content">
          {/* Contact Info */}
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

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
