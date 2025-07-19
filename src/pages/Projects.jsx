// src/pages/Projects.jsx
import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ title, description, githubLink, liveLink, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="project-header">
        <div className="project-folder">
          <FiFolder className="folder-icon" />
        </div>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FiGithub className="project-link-icon" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FiExternalLink className="project-link-icon" />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{title}</h3>

      <div className="project-description">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects] = useState([
    {
      title: 'ISTE App – Club Companion Platform',
      description: 'Mentored the development of a cross-platform mobile app for ISTE NITK members with Firebase for real-time sync, secure authentication, and Flutter-based responsive UI. Focused on performance optimization, modular code, and SIG-specific dashboards.',
      githubLink: 'https://github.com/shreyasachar/iste-app',
      liveLink: ''
    },
    {
      title: 'Readline Stealer Attack – InfoSec Research Project',
      description: 'Demonstrated vulnerabilities in Linux shell history files using malicious library injections. Captured and analyzed user commands to explore attack vectors in terminal environments, highlighting the need for improved input sanitization and secure memory handling.',
      githubLink: '',
      liveLink: 'https://www.malware-traffic-analysis.net/2024/10/23/index.html'
    },
    {
      title: 'KMC Mangalore App – Tinnitus Therapy Support',
      description: 'Led development of a cross-platform app to support Tailor-Made Notched Music Training (TMNMT) for tinnitus therapy. Enabled secure data management, patient monitoring, and real-time analytics for doctors using Flutter and Firebase.',
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Database Systems Course Registration Portal',
      description: 'Developed a course registration web app with modules for students and admins, using MySQL for backend data handling. Features include seat allotment, scheduling conflict checks, and role-based access.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/Database-systems',
      liveLink: ''
    },
    {
      title: 'Dynamic ARP Inspection for Network Security',
      description: 'Implemented a lightweight system to validate ARP packets using MAC mappings, mitigating ARP spoofing threats in local networks. Designed to run on resource-constrained devices like edge routers.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/Dynamic-ARP-Inspection',
      liveLink: ''
    },
    {
      title: 'ISTEapp-UX/UI Design',
      description: 'Designed a mobile app prototype for ISTE NITK with wireframes and flows using Figma. Focused on accessibility, SIG updates, announcements, and internal collaboration tools.',
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'ISTEcode – Online Coding Platform',
      description: 'Built a full-stack platform for coding practice and contests for ISTE NITK. Integrated real-time leaderboards, submission APIs, and performance tracking.',
      githubLink: 'https://github.com/shivamt2025/ISTECode',
      liveLink: ''
    },
    {
      title: 'Operating System Simulator',
      description: 'Created a web simulator for OS concepts like scheduling and memory management with animations and interactive logs to support academic use.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/OperatingSystemsimulator-',
      liveLink: ''
    },
    {
      title: 'Multi-UAV Load-Balanced MEC for IoT',
      description: 'Simulated UAV-based edge servers for IoT using Differential Evolution algorithms to optimize latency, bandwidth, and energy constraints.',
      githubLink: 'https://github.com/aniket-mtr/Load-Balanced-Multi-UAV-Edge-Computing',
      liveLink: ''
    },
    {
      title: 'Telephone Directory App – NITK',
      description: 'Built the official telephone directory app for NITK with categorized listings, search, and MySQL backend for data integrity. Cross-platform support for Android and iOS.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/telephoneapp',
      liveLink: 'https://telephone.nitk.ac.in/#'
    },
    {
      title: 'HEATWATCH – Temperature Monitoring System',
      description: 'Engineered a Logisim-based hardware model to measure average temperature using logic gates without memory components. Deployed the design using ICs on a physical PCB.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/Miniproject-HEATWATCH',
      liveLink: ''
    },
    {
      title: 'Handwritten Character Recognition',
      description: 'Built a real-time handwritten character detection system using CNN and OpenCV. Trained on custom datasets and optimized for OCR use cases.',
      githubLink: 'https://github.com/karandomguy/HCR',
      liveLink: ''
    }
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
