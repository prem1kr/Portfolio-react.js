import React from 'react';
import './style.css';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

import img1 from '../Pages/img/img1.png';
import img2 from '../Pages/img/img2.png';
import img3 from '../Pages/img/img3.png';
import img4 from '../Pages/img/img4.png';
import img5 from '../Pages/img/img5.png';

const Projects = () => {
  return (
    <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
            <h1>Project 1
            <a href="https://github.com/prem1kr/Ecommerce-Admin-and-Cashier-Dashboard-page.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> </a>
            </h1>
            <h2>Ecommerce-Admin-and-Cashier-Dashboard (MERN-STACK)</h2>
            <p>This is a Full Stack Ecommerce Admin and Cashier Dashboard using the MERN Stack. This platform includes dynamic interfaces for product management, order tracking, inventory control, and sales analytics. The Admin Panel allows for product uploads, price updates, and customer management, while the Cashier Dashboard streamlines order processing and billing. Implemented secure login, role-based access, and real-time data updates for a seamless operational workflow.</p>
          </div>
          <div className="project-img">
            <img src={img1} alt="img" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>
              Project 2 
              <a
                  href="https://github.com/prem1kr/Ai-Chat-Support-Full-Stack-website-.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> 
              </a>
              </h1>
            <h2>AI intergrate chat support (MERN STACK)</h2>
            <p>It's a real-time Chat and Video Chat Application using the MERN Stack, enabling users to engage in text-based and video communication. Integrated WebSocket (Socket.io) for live messaging and WebRTC for peer-to-peer video calls. Features include user authentication, chat history persistence, typing indicators, and responsive UI. Ensured seamless connectivity and performance across different devices and browsers.</p>
          </div>
          <div className="project-img">
                <img src={img2} alt="img" />
            
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>Project 3
            <a href="https://github.com/prem1kr/face-recognization-system" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> </a>

            </h1>
            <h2>Real Time Face Recognization System With Date and Time Stamping (PYTHON)</h2>
            <p>This system utilizes OpenCV, dlib, and face_recognition libraries for real-time face detection and recognition. It captures and verifies faces from a live camera feed, logging each recognition event with a timestamp using datetime and storing records in a CSV file or database. The system supports multi-user recognition, automatic attendance marking, and image preprocessing for improved accuracy. Integrated with Tkinter for GUI, it provides a user-friendly interface to monitor and manage entries. Ideal for security, attendance tracking, and access control systems.</p>
          </div>
          <div className="project-img">
            <img src={img3} alt="img" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>Project 4
            <a href="https://github.com/prem1kr/EASY-JOB" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> </a>

            </h1>
            <h2>Company Website (MERN STACK)</h2>
            <p>A Company Website built using the MERN Stack (MongoDB, Express.js, React, Node.js) offers a dynamic, responsive, and user-friendly experience. It includes key features like authentication, real-time updates, interactive UI, and secure backend APIs. The website ensures seamless data management with MongoDB, efficient routing with Express.js, a dynamic front-end with React.js, and a scalable server using Node.js. Additional functionalities include admin dashboards, SEO optimization, and third-party API integration. This full-stack solution provides a high-performance, scalable, and modern web presence for businesses.</p>
          </div>
          <div className="project-img">
            <img src={img4} alt="img" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>Project 5
            <a href="https://github.com/prem1kr/Chat" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> </a>

            </h1>
            <h2>Text Chat App and Video Chat app (MERN STACK)</h2>
            <p>Text Chat App and Video Chat App built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) enables real-time communication. It includes features like instant messaging, group chats, video calls, typing indicators, online status, and media sharing. Technologies used include WebSockets (Socket.io) for real-time updates, WebRTC for video calls, JWT authentication for security, and MongoDB for efficient data storage. The UI is built with React.js and Tailwind CSS, ensuring a responsive and interactive experience. The backend, powered by Node.js and Express.js, manages authentication, chat history, and real-time interactions seamlessly.</p>
          </div>
          <div className="project-img">
            <img src={img5} alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Projects;
