import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import InteractiveVisual from '../components/InteractiveVisual';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Ansh Malhotra</h1>
          <div className="role-wrapper">
            <span className="static-text">I am </span>
            <span className="dynamic-text text-accent">
              <Typewriter
                words={['A Software Developer', 'A Tech Enthusiast', 'Building Cool Stuff', 'Always Learning']}
                typingSpeed={150}
                deletingSpeed={50}
                delay={1000}
              />
            </span>
          </div>
          <p className="bio">
            A Software Developer who is either cooking up some fresh code for a new project or aggressively leveling up their typing speed. Probably both.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://www.linkedin.com/in/anshvivekmalhotra/" target="_blank" rel="noreferrer" className="btn btn-outline">Let's Connect</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/ANSHVIVEKMALHOTRA" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/anshvivekmalhotra/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:ansh.vivekyog@gmail.com"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <InteractiveVisual />
        </motion.div>
      </div>


    </section>
  );
};

export default Home;