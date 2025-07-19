import React from 'react';
import '../SkillsExperience.css';

// Skill categories with just names
const skills = {
  "Programming & Languages": [
    "C", "C++", "Python", "Dart", "MySQL", 
    "HTML", "CSS", "JavaScript", "LaTeX"
  ],
  "Frameworks & Libraries": [
    "React", "Flutter", "Node.js", "Flask", 
    "Express.js", "OpenCV", "Socket.IO"
  ],
  "Development Tools": [
    "Git", "GitHub", "Firebase", "Google Colab",
    "Postman", "VS Code", "Grafana","Cisco Packet Tracer", "GNS3", "Wireshark"
  ],
  "Other Tools & Concepts": [
    "Data Structures", "Algorithms", "OOP", 
    "REST APIs", "Agile Methodologies", "UI/UX", "figma",
  ]
};

const Skills = () => (
  <div className="skills-container">
    {Object.entries(skills).map(([category, items]) => (
      <div className="skill-category" key={category}>
        <h3>{category}</h3>
        <div className="skill-tags">
          {items.map((skill, index) => (
            <span className="skill-tag" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skills;