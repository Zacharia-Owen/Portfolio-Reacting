import React from 'react';
import profileImage from '../assets/Profile.jpg';
import '../styles/PageStyles.css';


function AboutMe() {
  return (
    <section className="about-page">
      <h1>About Me</h1>
      <img src={profileImage} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      <p>
        Hello! My name is Zacharia Owen, and I am a passionate begineer software developer with a strong interest in coding and software development. I am currently learning new technologies and working on personal projects to improve my skills and gain experience in the field. I am excited to connect with other developers and collaborate on projects.
      </p>
      <h2>Professional Background</h2>
      <p>
        My Background within the field of coding is nothing but a begineer, I have just finshed a six month coding bootcamp at Ohio State University and I am looking to expand my knowledge and experience within the field of coding. I have experience with HTML, CSS, JavaScript, and React. I am also familiar with Node.js and Express for backend development. I enjoy working on projects that challenge me and allow me to learn new skills.
      </p>
      <h2>Interests</h2>
      <ul>
        <li>Coding and software development</li>
        <li>Learning new technologies</li>
        <li>Open-source contributions</li>
        <li>Reading tech blogs and books</li>
      </ul>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out if you would like to connect or collaborate on projects! You can find my contact information in the "Contact Me" section below.
      </p>
    </section>
  );
}

export default AboutMe;