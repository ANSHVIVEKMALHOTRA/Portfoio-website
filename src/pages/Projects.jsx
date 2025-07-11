// src/pages/Projects.jsx
import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-header">
        <div className="project-folder">
          <FiFolder className="folder-icon" />
        </div>
        <div className="project-links">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FiGithub className="link-icon" />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiExternalLink className="link-icon" />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="project-title">{title}</h3>
      
      <div className="project-description">
        <p>{description}</p>
      </div>
      
      <div className="project-tech">
        {techStack.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects] = useState([
    {
      title: 'ISTE App – Club Companion Platform',
      description: 'Developed a cross-platform mobile application using Flutter and Firebase, facilitating seamless communication, event management, and resource sharing within the ISTE NITK student club.',
      techStack: ['Flutter', 'Firebase', 'Dart', 'Node.js'],
      githubLink: 'https://github.com/shreyasachar/iste-app',
      liveLink: ''
    },
    {
      title: 'Distributed File Storage',
      description: 'Implemented a robust distributed file storage system using Python, ensuring data redundancy and high availability with consistent hashing for efficient data distribution.',
      techStack: ['Python', 'Socket Programming', 'Hashing'],
      githubLink: 'https://github.com/shreyasachar/distributed-file-system',
      liveLink: ''
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website with a responsive design and interactive elements to showcase projects, skills, and experience.',
      techStack: ['React', 'JavaScript', 'CSS3', 'Figma'],
      githubLink: 'https://github.com/shreyasachar/portfolio',
      liveLink: 'https://www.shreyasachar.com'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Built an end-to-end predictive maintenance solution with machine learning models to forecast equipment failures and a Flask-based web interface for monitoring.',
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      githubLink: 'https://github.com/shreyasachar/predictive-maintenance',
      liveLink: ''
    },
    {
      title: 'HeatWatch',
      description: 'Developed a digital logic circuit for temperature monitoring using Logisim, focusing on energy efficiency and logic optimization.',
      techStack: ['Logisim', 'Digital Logic', 'Hardware Design'],
      githubLink: 'https://github.com/your-repo/heatwatch',
      liveLink: ''
    },
    {
      title: 'Handwritten Character Recognition',
      description: 'Created a CNN model for recognizing handwritten characters in real-time using computer vision and deep learning techniques.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
      githubLink: 'https://github.com/your-repo/handwritten-ocr',
      liveLink: ''
    },
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;