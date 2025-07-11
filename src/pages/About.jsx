import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">
        <span>About Me</span>
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
          Hey, I’m Ansh — someone who genuinely enjoys exploring how things work and why they matter. I’m driven by curiosity and the satisfaction that comes from solving problems thoughtfully, not just quickly.
          </p>
            <p>
          I like keeping things simple, intentional, and real. Whether I’m diving into something new or refining what I already know, I try to stay grounded, focused, and open to learning.
          </p>
          <p>
          Outside of the screen, you’ll usually find me reflecting, reading, or just soaking in the small details that often go unnoticed. I'm a big believer in quiet consistency over loud noise — and I try to let that show in the way I work and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
