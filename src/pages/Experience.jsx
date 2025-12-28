import React from 'react';
import '../SkillsExperience.css';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "Chaitanya Projects Consultancy Limited",
      role: "Frontend Development Intern",
      period: "May 2025 - Jul 2025",
      location: "Remote",
      desc: [
        "Contributed to the development of an internal ERP system by implementing responsive frontend interfaces and integrating APIs.",
        "Utilized Postman for structured API testing, response inspection, and debugging request cycles during development."
      ]
    },
    {
      company: "Ergon Labs",
      role: "Software Developer Intern",
      period: "May 2025 - Jul 2025",
      location: "Bangalore, Karnataka",
      desc: [
        "Implemented federated learning models in a server-client setup, focusing on data privacy and communication efficiency.",
        "Applied advanced techniques like FederatedTrust to enhance security in federated learning systems."
      ]
    },
    {
      company: "CSIR-4PI(NAL)",
      role: "Research Intern",
      period: "May 2024 - Jul 2024",
      location: "Bangalore, Karnataka",
      desc: [
        "Implemented federated learning models in a server-client setup, focusing on data privacy and communication efficiency.",
        "Applied advanced techniques like FederatedTrust to enhance security in federated learning systems."
      ]
    },
    {
      company: "KMC Hospital",
      role: "App Team Lead",
      period: "Mar 2024 - Jul 2024",
      location: "Mangalore, Karnataka",
      desc: [
        "Collaborated with medical professionals to gather and analyze patient data for trend identification and reporting.",
        "Assisted in the development of a system for monitoring and managing patient health metrics efficiently."
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="timeline-line"></div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card-wrapper"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            <div className="experience-card">
              <div className="card-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="role-badge">{exp.role}</span>
              </div>

              <div className="card-meta">
                <span className="meta-item">
                  <FaCalendarAlt className="meta-icon" /> {exp.period}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" /> {exp.location}
                </span>
              </div>

              <ul className="experience-description">
                {exp.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
