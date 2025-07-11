// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer"> {/* Changed from 'footer' to 'main-footer' */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-name">Ansh Vivek Malhotra</h3>
          <p className="footer-description">
           A Software Developer who is either cooking up some fresh code for a new project or aggressively leveling up their typing speed. Probably both.          </p>

        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:ansh.vivekyog@gmail.com">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anshvivekmalhotra/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ANSHVIVEKMALHOTRA" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Made with 💙 by Ansh Vivek Malhotra.</p>
      </div>
    </footer>
  );
};

export default Footer;