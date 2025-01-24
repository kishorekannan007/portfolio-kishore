import React from 'react';

const Projects = ({ openModal }) => {
  const projects = [
    {
      name: 'Face Analysis Attendance System',
      description: 'A system that uses facial recognition to track attendance efficiently.',
      link: '#',
    },
    {
      name: 'Voice-Based Voting Machine',
      description: 'An accessible voting system for visually impaired users using voice recognition.',
      link: '#',
    },
    {
      name: 'Plant Species Detection System',
      description: 'A machine learning project to identify plant species from images.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button className="project-link" onClick={() => openModal(project.link)}>
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
