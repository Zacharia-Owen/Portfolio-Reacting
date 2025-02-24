import React from 'react';

export default function Portfolio() {
    const projects = [
      { title: "Employee Tracker", repo: "https://github.com/Rilsotea/Employee-Tracker"},
      { title: "Vehicle Creation and Driving", repo: "https://github.com/Rilsotea/Vehicle-Creator-Testing"},
      { title: "ReadME Generator", repo: "https://github.com/Rilsotea/README-maker"},
    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <h3>{project.title}</h3>
              <a href={project.link}></a>
              <a href={project.repo}>GitHub Repo</a>
            </div>
          ))}
        </div>
      </section>
    );
}