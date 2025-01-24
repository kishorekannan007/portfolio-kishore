import React from 'react';

const Skills = () => {
  const skills = ['C++', 'Java', 'Python', 'React.js', 'Embeded IOT', 'MySQL', 'Machine Learning'];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
