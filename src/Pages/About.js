import React from 'react';
import './style.css';
import img from '../Pages/img/img-2.png'

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>Full Stack Web Developer</h2>
          <p>I am Prem Kumar, a Full Stack Web Developer specializing in the MERN stack.
            Currently I am pursuing a Bachelor's degree in Electronics and Communication Engineering from Chandigarh Engineering College.
            I have expertise in React.js, Node.js, Express.js, and MongoDB, building scalable and dynamic web applications.
            Proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and modern front-end frameworks.
            Experienced in REST APIs, authentication (JWT, OAuth), and database management with MongoDB & SQL.
            Skilled in Git, GitHub, Netlify, Vercel, and Heroku for version control and deployment.
            Passionate about problem-solving, UI/UX design, and optimizing web applications.
          </p>
          <a href="https://drive.google.com/file/d/149sH55C5WIwiP6A2WL7gyWM7XZ1PQm15/view?usp=sharing" className="cta">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;