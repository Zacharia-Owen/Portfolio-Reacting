import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Employee Tracker",
      repo: "https://github.com/Rilsotea/Employee-Tracker",
      description: "A command-line application for managing employee data."
    },
    {
      title: "Vehicle Creation and Driving",
      repo: "https://github.com/Rilsotea/Vehicle-Creator-Testing",
      description: "An application for creating and managing vehicle information."
    },
    {
      title: "ReadME Generator",
      repo: "https://github.com/Rilsotea/README-maker",
      description: "A tool to generate professional README files."
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;