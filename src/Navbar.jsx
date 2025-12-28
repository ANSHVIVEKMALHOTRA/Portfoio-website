import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (id) => {
    closeMenu();
    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            ANSH<span className="dot">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                <button onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a href="/Ansh_Resume.pdf" download className="resume-btn">
                Resume
              </a>
            </li>
          </ul>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-overlay-content">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={item.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="overlay-link"
                >
                  <span className="index-number">0{index + 1}</span>
                  {item.label}
                </button>
              </li>
            ))}
            <li style={{ transitionDelay: `${navItems.length * 0.1}s` }}>
              <a href="/Ansh_Resume.pdf" download className="overlay-link">
                <span className="index-number">0{navItems.length + 1}</span>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;