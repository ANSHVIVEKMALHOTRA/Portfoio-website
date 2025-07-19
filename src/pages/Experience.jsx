// src/pages/Experience.jsx
import React from 'react';
import '../SkillsExperience.css'; // Import the shared styles

const Experience = () => (
  <div className="experience-container">
    <div className="experience-list">

      <div className="experience-item">
        <h3>Frontend Development Intern — Chaitanya Projects Consultancy Limited</h3>
        <p className="duration">May 2025 - Jul 2025, Bangalore, Karnataka</p>
        <ul>
          <li>Contributed to the development of an internal ERP system by implementing responsive frontend interfaces and integrating APIs.</li>
          <li>Utilized Postman for structured API testing, response inspection, and debugging request cycles during development.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Software Developer Intern — Ergon Labs</h3>
        <p className="duration">May 2025 - Jul 2025, Bangalore, Karnataka</p>
        <ul>
          <li>Implemented federated learning models in a server-client setup, focusing on data privacy and communication efficiency.</li>
          <li>Applied advanced techniques like FederatedTrust to enhance security in federated learning systems.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Research Intern — Council of Scientific and Industrial Research-4PI(NAL)</h3>
        <p className="duration">May 2024 - Jul 2024, Bangalore, Karnataka</p>
        <ul>
          <li>Implemented federated learning models in a server-client setup, focusing on data privacy and communication efficiency.</li>
          <li>Applied advanced techniques like FederatedTrust to enhance security in federated learning systems.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>App Team Lead — KMC Hospital</h3>
        <p className="duration">Mar 2024 - Jul 2024, Mangalore, Karnataka</p>
        <ul>
          <li>Collaborated with medical professionals to gather and analyze patient data for trend identification and reporting.</li>
          <li>Assisted in the development of a system for monitoring and managing patient health metrics efficiently.</li>
        </ul>
      </div>

    </div>
  </div>
);

export default Experience;
