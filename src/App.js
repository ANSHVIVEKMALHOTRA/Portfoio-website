// src/App.jsx
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import './index.css';
import './SkillsExperience.css';

import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Education from './pages/Education';
import Footer from './Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef({});
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);

  // Register section refs
  const registerSection = (id, element) => {
    if (element) {
      sections.current[id] = element;
    }
  };

  // Handle smooth scrolling to section
  const scrollToSection = (sectionId) => {
    if (isScrolling.current || !sections.current[sectionId]) return;
    
    isScrolling.current = true;
    setActiveSection(sectionId);
    
    window.scrollTo({
      top: sections.current[sectionId].offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth'
    });

    // Prevent rapid section changes during scroll
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      let newActiveSection = 'home';
      
      // Find which section is currently in view
      Object.entries(sections.current).forEach(([id, element]) => {
        if (!element) return;
        
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;
        
        if (scrollPosition >= elementTop - 200 && scrollPosition < elementBottom - 200) {
          newActiveSection = id;
        }
      });
      
      setActiveSection(newActiveSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main className="main-content">
        <section id="home" ref={el => registerSection('home', el)}>
          <Home />
        </section>

        <section id="about" ref={el => registerSection('about', el)} className="section-padding">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="education" ref={el => registerSection('education', el)} className="section-padding">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <Education />
          </div>
        </section>

        <section id="skills" ref={el => registerSection('skills', el)} className="section-padding">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <Skills />
          </div>
        </section>

        <section id="experience" ref={el => registerSection('experience', el)} className="section-padding">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <Experience />
          </div>
        </section>

        <section id="projects" ref={el => registerSection('projects', el)} className="section-padding">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="leadership" ref={el => registerSection('leadership', el)} className="section-padding">
          <div className="container">
            <Leadership />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;