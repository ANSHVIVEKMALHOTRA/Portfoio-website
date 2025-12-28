// src/pages/Projects.jsx
import React, { useState } from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ title, description, githubLink, liveLink, index }) => {
  return (
    <motion.div
      className="project-row" // Keeping class name for CSS matching
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="row-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="row-actions">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-link">
            GitHub <FiGithub />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="action-link">
            Live <FiArrowUpRight />
          </a>
        )}
      </div>
    </motion.div >
  );
};

const Projects = () => {
  const [projects] = useState([
    {
      title: 'RL-ARAG – Reinforcement Learning–Based Adaptive Routing and Granularity Control',
      description: 'Designing an RL-based adaptive routing framework for high-speed networks that optimizes load balancing and congestion avoidance. The system dynamically selects routing granularity (flow, flowlet, or packet-level) based on real-time telemetry signals to balance link utilization and packet reordering.',
      githubLink: '',
      liveLink: ''
    },

    {
      title: 'ISTE App – Club Companion Platform',
      description: 'Mentored the development of a cross-platform mobile app for ISTE NITK members with Firebase for real-time sync, secure authentication, and Flutter-based responsive UI. Focused on performance optimization, modular code, and SIG-specific dashboards.',
      githubLink: 'https://github.com/shreyasachar/iste-app',
      liveLink: ''
    },
    {
      title: 'Readline Stealer Attack – Information Security Research Project',
      description: 'Demonstrated vulnerabilities in Linux shell history files using malicious library injections. Captured and analyzed user commands to explore attack vectors in terminal environments, highlighting the need for improved input sanitization and secure memory handling.',
      githubLink: '',
      liveLink: 'https://www.malware-traffic-analysis.net/2024/10/23/index.html'
    },
    {
      title: 'KMC mangalore APP - App Team Lead',
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
      title: 'Dynamic ARP Inspection for Network Security - Research Paper(Not published yet)',
      description: 'Implemented a lightweight system to validate ARP packets using MAC mappings, mitigating ARP spoofing threats in local networks. Designed to run on resource-constrained devices like edge routers.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/Dynamic-ARP-Inspection',
      liveLink: ''
    },
    {
      title: 'ISTEapp-UX/UI',
      description: 'Designed a mobile app prototype for ISTE NITK with wireframes and flows using Figma. Focused on accessibility, SIG updates, announcements, and internal collaboration tools.',
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'ISTEcode - An online coding platform',
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
      title: 'Multi-UAV Load-Balanced Mobile Edge Computing for IoT',
      description: 'Simulated UAV-based edge servers for IoT using Differential Evolution algorithms to optimize latency, bandwidth, and energy constraints.',
      githubLink: 'https://github.com/aniket-mtr/Load-Balanced-Multi-UAV-Edge-Computing',
      liveLink: ''
    },
    {
      title: 'TCP Congestion Control over Wi-Fi – NS-3',
      description: 'Extended NS-3 simulations to compare TCP congestion control variants (NewReno, CUBIC, BBR) under static and mobile Wi-Fi conditions. Evaluated 802.11n/ac/ax/be standards to analyze throughput, latency, and PHY/MAC design trade-offs.',
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Telephone directory APP NITK',
      description: 'Built the official telephone directory app for NITK with categorized listings, search, and MySQL backend for data integrity. Cross-platform support for Android and iOS.',
      githubLink: 'https://github.com/ANSHVIVEKMALHOTRA/telephoneapp',
      liveLink: 'https://telephone.nitk.ac.in/#'
    },
    {
      title: 'HEATWATCH(Temperature measuring system)',
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
      <div className="projects-container">
        <div className="projects-header-row">
          <span>PROJECT</span>
          <span>DESCRIPTION</span>
          <span>LINKS</span>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
