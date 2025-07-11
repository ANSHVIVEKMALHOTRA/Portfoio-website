// src/pages/Leadership.jsx
import React from 'react';
import './Leadership.css';

const leadershipRoles = [
  {
    title: 'President',
    organization: 'ISTE NITK',
    period: '2022 - 2023',
    description: 'Led a team of 200+ students in organizing technical workshops, events, and fostering a learning environment for aspiring engineers.',
    details: 'Prior role: Technical Secretary'
  },
  {
    title: 'VP of Web Design & PR',
    organization: 'Student Energy NITK',
    period: '2021 - 2022',
    description: 'Managed the organization\'s online presence, designed and maintained the website, and handled public relations for various initiatives focused on sustainable energy.',
    details: ''
  },
  {
    title: 'CREST Conference Delegate',
    organization: 'CSE Department',
    period: '2022',
    description: 'Represented the CSE Department at the annual CREST Conference, participating in discussions and presentations on cutting-edge research and technology trends.',
    details: ''
  },
  {
    title: 'Executive Member',
    organization: 'LSD (Literary, Stage & Debate)',
    period: '2020 - 2021',
    description: 'Actively contributed to organizing and executing various literary, stage, and debate events, promoting student engagement in cultural and intellectual activities.',
    details: ''
  }
];

const Leadership = () => (
  <section id="leadership" className="section">
    <div className="container">
      <h2 className="section-title">Leadership & Activities</h2>
      <div className="cards-container">
        <div className="cards-stack">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="leadership-card">
              <h3>{role.title}</h3>
              <p className="organization">{role.organization}</p>
              <p className="date">{role.period}</p>
              <p className="description">{role.description}</p>
              {role.details && <p className="details">{role.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Leadership;