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
                  href="https://github.com/prem1kr/Full-Stack-Ai-integrated-Chat-Support-web-App.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red"/> 
              </a>
              </h1>
            <h2>AI intergrate chat support (MERN STACK)</h2>
            <p>AI Customer Support Chat Platform is a modern, intelligent helpdesk solution built using the MERN stack and powered by Google’s Gemini API, It enables businesses to offer fast, accurate, and human-like responses to customer queries in real time, The platform features a clean, responsive chat interface where users can interact seamlessly across desktop and mobile devices, An integrated admin dashboard allows support teams to monitor active conversations, manage users, and fine-tune AI behavior Conversations are stored securely in MongoDB, enabling analytics, history tracking, and follow-up actions Built with Expressjs and Nodejs on the backend, it ensures high performance and scalability JWT authentication keeps both customer and admin accounts secure.</p>
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
            <h2>Personal Finance Manager (Next.js + MongoDB) </h2>
            <p>This Personal Finance Manager is a full‑stack web app built with Next.js (App Router + API routes) and MongoDB for reliable, scalable data storage.​
It lets users securely track income, expenses, and overall transactions with authentication to protect personal financial data.​
The app supports Google login for faster onboarding and a smoother sign‑in experience.​
Users can personalize their profile using avatar upload, making the dashboard feel more tailored and engaging.​</p>
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
