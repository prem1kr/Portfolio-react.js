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
            <a href="https://github.com/prem1kr/Fitness-Site" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> </a>
            </h1>
            <h2>Fitness Website (MERN-STACK)</h2>
            <p>Fitness Website (MERN Stack) is a full-stack web application designed to help users workouts and set fitness goals. Built using MongoDB, Express.js, React.js, and Node.js, it offers features like user authentication, personalized dashboards, workout plans, progress tracking, and diet recommendations. The backend handles secure user data, APIs, and real-time updates, while the frontend ensures a responsive and interactive user experience.</p>
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
                  href="https://github.com/prem1kr/Hospital-Managment-system" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> 
              </a>
              </h1>
            <h2>Hospital Food Management System (MERN STACK)</h2>
            <p>Hospital Food Management System (MERN Stack) is a web application designed to streamline meal planning, ordering, and distribution in hospitals. Built using MongoDB, Express.js, React.js, and Node.js, it offers real-time tracking, diet customization, and automated scheduling. Key features include role-based access, patient-specific meal plans, inventory management, and order analytics. It integrates authentication, RESTful APIs, and a responsive UI for seamless user experience. This system enhances efficiency, reduces food waste, and ensures timely meal delivery for patients.</p>
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