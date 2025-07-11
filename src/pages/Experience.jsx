// src/pages/Experience.jsx
import React from 'react';
import '../SkillsExperience.css'; // Import the shared styles

const Experience = () => (
  <div className="experience-container">
    <div className="experience-list">
      <div className="experience-item">
        {/* Using a generic icon from icons8, apply styles via CSS */}
        <h3>Software Developer Intern — Ergon Mobility, Bangalore, Karnataka</h3>
        <p className="duration">May 2025 - Jul 2025</p>
        <ul>
          <li>Developed a web application to interface with CAN-based vehicle systems for real-time data monitoring.</li>
          <li>Migrated the database from a legacy service to a new platform, improving performance and maintainability.</li>
        </ul>
      </div>

      <div className="experience-item">
        {/* Using university icon for NITK */}
        <h3>Industrial Training Intern — NIT Karnataka, Mangalore, Karnataka</h3>
        <p className="duration">Dec 2024 - Jan 2025</p>
        <ul>
          <li>Implemented the DECO algorithm to optimize task offloading in Mobile Edge Computing (MEC) systems.</li>
          <li>Designed a framework for scalable scheduling across diverse edge servers.</li>
        </ul>
      </div>

      <div className="experience-item">
        {/* Using Flask as a generic icon, no specific logo provided */}
        <h3>Research Intern — Council of Scientific and Industrial Research-4PI(NAL), Bangalore, Karnataka</h3>
        <p className="duration">May 2024 - Jul 2024</p>
        <ul>
          <li>Implemented federated learning models in a server-client setup, focusing on data privacy and communication efficiency.</li>
          <li>Applied advanced techniques like FederatedTrust to enhance security in federated learning systems.</li>
        </ul>
      </div>

      <div className="experience-item">
        {/* Generic hospital icon, as no specific KMC logo provided */}
        <h3>App Team Lead — KMC Hospital, Mangalore, Karnataka</h3>
        <p className="duration">Mar 2024 - Jul 2024</p>
        <ul>
          <li>Collaborated with medical professionals to gather and analyze patient data for trend identification and reporting.</li>
          <li>Assisted in the development of a system for monitoring and managing patient health metrics efficiently.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;