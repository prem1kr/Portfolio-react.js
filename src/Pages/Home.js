import React from 'react';
import './style.css';

const Home = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>My Name is <span></span></h1>
          <h1>Prem kumar <span></span></h1>
          <a href="#projects" type="button" className="cta">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default Home;