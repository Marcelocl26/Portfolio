// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.imageUrl} alt={project.title} />
      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
    </div>
  );
};

export default ProjectCard;
