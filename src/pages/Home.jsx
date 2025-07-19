// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Home.css';

const Typewriter = ({ words, delay = 100 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, delay);

    if (!reverse && subIndex === words[index].length) {
      clearTimeout(timeout);
      setTimeout(() => setReverse(true), 1000);
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, delay]);

  return (
    <span className="typewriter-text">{words[index].substring(0, subIndex)}</span>
  );
};

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hi, my name is</p>
            <h1 className="hero-title">
              <span className="highlight-name">Ansh</span> Vivek Malhotra
            </h1>
            <h2 className="hero-subtitle">
              I build <Typewriter words={["mobile apps", "websites", "cool stuff"]} />
            </h2>
            <p className="hero-description">
              A Software Developer who is either cooking up some fresh code for a new project
              or aggressively leveling up their typing speed. Probably both.
            </p>
            <div className="hero-cta">
              <a 
                href="https://www.linkedin.com/in/anshvivekmalhotra/" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-animation">
            <DotLottieReact
              src="https://lottie.host/9e6fd7e9-2361-4f8d-ba64-06cfde5fda20/vmM9Zq9Pdi.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;