import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'leadership'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items with corresponding section IDs
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(e) => scrollToSection(e, 'home')}
          aria-label="Home"
        >
          Ansh Vivek Malhotra
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        {/* Navigation links */}
        <ul className={`navbar-nav ${isMenuOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="nav-link-text">{item.label}</span>
                {activeSection === item.id && (
                  <span className="active-indicator" aria-hidden="true"></span>
                )}
              </a>
            </li>
          ))}
          
          {/* Resume download link */}
          <li className="nav-item">
            <a
              href="/Ansh_Resume.pdf"
              download="Ansh_Resume.pdf"
              className="nav-link resume-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="resume-text">Resume</span>
              <span className="resume-icon" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;