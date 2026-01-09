import React from 'react';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';
import './Coursework.css';

const courses = [
  "Data Structures and Algo",
  "Software Engineering",
  "Computer Networks",
  "Artificial Intelligence",
  "Wireless Networks",
  "Digital Image Processing",
  "Internet of Things",
  "Topics in Information Security",
  "Design of Digital Systems",
  "Operating Systems",
  "Information Security",
  "Probability Theory and Applications",
  "Computer Architecture",
  "Cloud Computing",
  "Compiler Design",
  "Database Systems",
  "Data Communication",
];

const Coursework = () => {
  return (
    <div className="coursework-container">
      <div className="coursework-grid">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="course-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="course-icon">
              <FaBook />
            </div>
            <h3 className="course-name">{course}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
