import React from 'react';
import '../SkillsExperience.css';

const Education = () => (
  <div className="experience-container">
    <div className="experience-list">
      <div className="experience-item">
        <h3>Bachelor of Technology in Computer Science</h3>
        <p className="duration">National Institute of Technology Karnataka, Surathkal • 2022 - 2026</p>
        <ul>
          <li>Pursuing B.Tech in Computer Science and Engineering</li>
          <li>CGPA: X.XX/10.00 (Expected)</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Higher Secondary (12th Grade)</h3>
        <p className="duration">Narayana PU College • 2020 - 2022</p>
        <ul>
          <li>Completed 12th Grade with PCMB (Physics, Chemistry, Mathematics, Biology)</li>
          <li>Percentage: XX%</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Secondary (10th Grade)</h3>
        <p className="duration">Your School Name • 2019 - 2020</p>
        <ul>
          <li>Completed 10th Grade with distinction</li>
          <li>Percentage: XX%</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Education;
