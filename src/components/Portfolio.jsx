import React from 'react';
import '../styles/PageStyles.css';

function Portfolio() {
  const projects = [
    {
      title: "Employee Tracker",
      repo: "https://github.com/Zacharia-Owen/Employee-Tracker",
      description: "A command-line application for managing employee data.",
      role: "Solo Project"
    },
    {
      title: "Vehicle Creation and Driving",
      repo: "https://github.com/Zacharia-Owen/Vehicle-Creator-Testing",
      description: "An application for creating and managing vehicle information.",
      role: "Solo Project"
    },
    {
      title: "ReadME Generator",
      repo: "https://github.com/Zacharia-Owen/README-maker",
      description: "A tool to generate professional README files.",
      role: "Solo Project"
    },
     {
      title: "Golf Course and Scorecard",
      repo: "https://github.com/smoenter/Personal-Golf-Course-and-Score-Tracker",
      description: "A group project that made a web application for tracking golf courses and scores.",
      role: "I was responsible for the back end development, including setting up the database and API endpoints."
    },
    {
      title: "JamJar",
      repo: "https://github.com/ikranahmed/JamJar",
      description: "A group project that made a web application for managing and sharing music playlists.",
      role: "I was responsible for the back end development, including setting up the database and API endpoints."
    },
   
  ];

  return (
    <section className="portfolio-page">
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project">
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