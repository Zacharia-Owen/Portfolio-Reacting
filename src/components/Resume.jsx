import React from 'react';
import '../styles/PageStyles.css';

function Resume() {
  const personalInfo = {
    name: "Zacharia Owen",
    github: "https://github.com/Zacharia-Owen/"
  };

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "TypeScript"
  ];

  const experience = [
    {
      jobTitle: "Back End Developer",
      company: "JamJar Tech",
      location: "OSU Bootcamp, Remote",
      dates: "April 2025 - 2025",
      responsibilities: [
        "Developed RESTful APIs using Node.js and Express.",
        "Implemented database schemas and queries using MongoDB.",
        "Collaborated with front-end developers to integrate user interfaces."
      ]
    },
    {
      jobTitle: "Back End Developer",
      company: "Golf Course Tracker Corp",
      location: "OSU Bootcamp, Remote",
      dates: "March 2025 - March 2025",
      responsibilities: [
        "Designed and implemented back-end services for a golf course management application.",
        "Collaborated with front-end developers to integrate APIs."
      ]
    }
  ];

  const education = [
    {
      degree: "High School Diploma",
      school: "Dover High School",
      location: "Dover, DE",
      graduationDate: "May 2012"
    },
    {
      Certificate: "OSU Full Stack Flex Coding Bootcamp",
      school: "Ohio State University",
      location: "Ohio, Remote",
      graduationDate: "May 2025"
    }

  ];

  return (
    <section className="resume-page">
      <h1>{personalInfo.name}</h1>
      <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a></p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <h3>{job.jobTitle} - {job.company}</h3>
          <p>{job.location} | {job.dates}</p>
          <ul>
            {job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <p>{edu.degree}</p>
          <p>{edu.school} | {edu.location} | Graduated: {edu.graduationDate}</p>
        </div>
      ))}
    </section>
  );
}

export default Resume;