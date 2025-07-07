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
      jobTitle: "Software Developer",
      company: "Example Tech Company",
      location: "Example, Example",
      dates: "Jan 2022 - Present",
      responsibilities: [
        "Developed web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Participated in code reviews and provided constructive feedback."
      ]
    },
    {
      jobTitle: "Intern Developer",
      company: "Another Tech Example",
      location: "Example, State",
      dates: "Jun 2021 - Dec 2021",
      responsibilities: [
        "Assisted in the development of user interfaces using React.",
        "Wrote unit tests to ensure code quality.",
        "Participated in daily stand-ups and agile ceremonies."
      ]
    }
  ];

  const education = [
    {
      degree: "Exaample Degree",
      school: "Example University",
      location: "Example, Example",
      graduationDate: "May 2021"
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
          <h3>{edu.degree}</h3>
          <p>{edu.school} | {edu.location} | Graduated: {edu.graduationDate}</p>
        </div>
      ))}
    </section>
  );
}

export default Resume;