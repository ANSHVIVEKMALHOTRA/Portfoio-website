import React from 'react';
import '../SkillsExperience.css';
import { motion } from 'framer-motion';

import {
  FaCode, FaLayerGroup, FaTools, FaLightbulb,
  FaNetworkWired, FaProjectDiagram, FaCalculator, FaCube, FaServer, FaSync, FaPencilRuler,
  FaMicrochip, FaFilter, FaClipboardCheck, FaChartLine, FaChartBar, FaRocket, FaWifi
} from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import {
  SiC, SiCplusplus, SiPython, SiDart, SiMysql,
  SiHtml5, SiCss3, SiJavascript, SiLatex,
  SiReact, SiFlutter, SiNodedotjs, SiFlask, SiExpress, SiOpencv, SiSocketdotio,
  SiGit, SiGithub, SiFirebase, SiGooglecolab, SiPostman, SiGrafana, SiWireshark,
  SiFigma, SiTensorflow, SiGitlab, SiCisco
} from 'react-icons/si';

// Skill categories with icons
const skills = [
  {
    category: "Programming & Languages",
    icon: <FaCode />,
    items: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "LaTeX", icon: <SiLatex /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaLayerGroup />,
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> }, // Updated name to match request
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Socket.io", icon: <SiSocketdotio /> } // Updated name to match request
    ]
  },
  {
    category: "Development Tools & Simulation",
    icon: <FaTools />,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "NS3", icon: <FaWifi /> },
      { name: "Cisco P.T.", icon: <SiCisco /> },
      { name: "Google Colab", icon: <SiGooglecolab /> },
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "Logisim", icon: <FaMicrochip /> },
      { name: "JFLAP", icon: <FaProjectDiagram /> }
    ]
  },
  {
    category: "Core Competencies",
    icon: <FaLightbulb />,
    items: [
      { name: "Data Preprocessing", icon: <FaFilter /> },
      { name: "Model Evaluation", icon: <FaClipboardCheck /> },
      { name: "Real-time Vis.", icon: <FaChartLine /> }, // Visualization shortened for fit
      { name: "API Development", icon: <FaServer /> },
      { name: "Stat. Reasoning", icon: <FaChartBar /> }, // Statistical Reasoning shortened
      { name: "Optimization", icon: <FaRocket /> }, // Optimization Concepts shortened
      { name: "Data Structs", icon: <FaProjectDiagram /> }, // Kept as relevant
      { name: "Algorithms", icon: <FaCalculator /> }, // Kept as relevant
      { name: "OOP", icon: <FaCube /> }, // Kept as relevant
    ]
  }
];

const Skills = () => (
  <div className="skills-container">
    {skills.map((skillGroup, index) => (
      <motion.div
        className="skill-category"
        key={skillGroup.category}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3>
          <span className="category-icon">{skillGroup.icon}</span>
          {skillGroup.category}
        </h3>
        <div className="skills-grid">
          {skillGroup.items.map((skill, i) => (
            <motion.div
              className="skill-item"
              key={i}
              whileHover={{ scale: 1.1, color: "var(--accent-color)" }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

export default Skills;