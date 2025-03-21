import React, { useEffect, useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    const handleHamburgerClick = () => {
      setIsActive(!isActive);
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    };

    const handleScroll = () => {
      const scroll_position = window.scrollY;
      if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };

    const handleMenuItemClick = () => {
      setIsActive(false);
      hamburger.classList.remove('active');
      mobile_menu.classList.remove('active');
    };

    hamburger.addEventListener('click', handleHamburgerClick);
    document.addEventListener('scroll', handleScroll);
    menu_item.forEach((item) => {
      item.addEventListener('click', handleMenuItemClick);
    });

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      document.removeEventListener('scroll', handleScroll);
      menu_item.forEach((item) => {
        item.removeEventListener('click', handleMenuItemClick);
      });
    };
  }, [isActive]);

  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>P</span>rem <span>K</span>umar</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#services" data-after="Service">Services</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;