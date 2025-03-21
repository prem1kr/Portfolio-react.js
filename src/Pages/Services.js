import React from 'react';
import './style.css';

const Services = () => {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">Serv<span>i</span>ces</h1>
          <p>I provide end-to-end Full Stack Development services, including responsive front-end (React.js), robust back-end (Node.js, Express.js), efficient database management (MongoDB), and seamless API integration for scalable web applications.</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/8407/8407535.png" alt="icon" /></div>
            <h2>Frontend Web Design</h2>
            <p>Frontend skills for MERN stack include React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS/Bootstrap, Redux/Context API, React Router, Axios/Fetch API, WebSockets (Socket.io), and WebRTC.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/6007/6007875.png" alt="icon" /></div>
            <h2>Backend Web Design</h2>
            <p>Backend skills for the MERN stack include Node.js, Express.js, MongoDB, RESTful APIs, GraphQL, JWT authentication, WebSockets (Socket.io), MVC architecture, database management, and server-side security.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/9909/9909946.png" alt="icon" /></div>
            <h2>Database Web Design</h2>
            <p>Proficient in MongoDB, including CRUD operations, Mongoose ODM, indexing, aggregation, schema design, authentication, and database optimization for scalable MERN stack applications.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/4180/4180439.png" alt="icon" /></div>
            <h2>API Integration</h2>
            <p>Proficient in API integration using RESTful and GraphQL APIs, handling authentication (JWT, OAuth), third-party APIs, Axios, Fetch, WebSockets (Socket.io), and real-time data synchronization in MERN stack applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;