// src/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  // Datos de ejemplo para los proyectos
  const repos = [
    {
      id: 1,
      name: 'Proyecto Uno',
      description: 'Descripción del proyecto uno',
      language: 'JavaScript',
      stargazers_count: 10,
      forks_count: 5,
      html_url: '#',
    },
    {
      id: 2,
      name: 'Proyecto Dos',
      description: 'Descripción del proyecto dos',
      language: 'Python',
      stargazers_count: 20,
      forks_count: 10,
      html_url: '#',
    },
    // Agrega más proyectos si es necesario
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>Lenguaje: {repo.language}</p>
              <p>Estrellas: {repo.stargazers_count}</p>
              <p>Forks: {repo.forks_count}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
