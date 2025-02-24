import React from 'react';
import profileImage from './assets/Profile.jpg';

export default function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile Image" className="profile-photo" />
      <p>Hi! I'm a web developer specializing in building modern, responsive, and user-friendly applications.</p>
    </section>
  );
}