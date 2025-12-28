// src/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import profileImage from './assets/profile.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-name">Ansh Vivek Malhotra</h2>
          <p className="footer-tagline">
            A Software Developer who is either cooking up some fresh code for a new project or aggressively leveling up their typing speed. Probably both.
          </p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/anshvivekmalhotra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ANSHVIVEKMALHOTRA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:ansh.vivekyog@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-buttons">
            <a href="/Ansh_Resume.pdf" className="btn-resume" download>
              <span className="icon-resume">📄</span> Resume
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="Ansh Vivek Malhotra" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with 💙 by Ansh Vivek Malhotra</p>
      </div>
    </footer>
  );
};

export default Footer;