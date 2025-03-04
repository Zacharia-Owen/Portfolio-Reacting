import React from 'react';
import profileImage from '../assets/Profile.jpg';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      <p>
        Hello! My name is Zacharia Owen, and I am a passionate begineer software developer with a strong interest in coding and software development. I am currently learning new technologies and working on personal projects to improve my skills and gain experience in the field. I am excited to connect with other developers and collaborate on projects.
      </p>
      <h3>Professional Background</h3>
      <p>
        My Background within the field of coding is nothing but a begineer, I have been coding for a few months now and I am looking to expand my knowledge and experience within the field of coding. I have experience with HTML, CSS, JavaScript, and React. I am currently learning Node.js and TypeScript.
      </p>
      <h3>Interests</h3>
      <ul>
        <li>Coding and software development</li>
        <li>Learning new technologies</li>
        <li>Open-source contributions</li>
        <li>Participating in hackathons</li>
        <li>Reading tech blogs and books</li>
      </ul>
      <h3>Contact Me</h3>
      <p>
        Feel free to reach out if you would like to connect or collaborate on projects! You can find my contact information in the "Contact Me" section.
      </p>
    </section>
  );
}

export default AboutMe;