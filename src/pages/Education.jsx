import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="education-container">
      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="education-content">
          <h3>National Institute of Technology Karnataka, Surathkal</h3>
          <span className="institution">Bachelor of Technology • Computer Science and Engineering</span>
        </div>
        <div className="education-date">
          <span className="duration">2022 - 2026</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="education-content">
          <h3>Narayana PU College</h3>
          <span className="institution">Higher Secondary (12th Grade)</span>
          <p className="detail">Subjects: Physics, Chemistry, Mathematics, Computer Science</p>
        </div>
        <div className="education-date">
          <span className="duration">2020 - 2022</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="education-content">
          <h3>Frank Public School</h3>
          <span className="institution">Secondary School Education</span>
        </div>
        <div className="education-date">
          <span className="duration">2018 - 2020</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
