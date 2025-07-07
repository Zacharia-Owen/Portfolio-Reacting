import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Nav() {
    return (
      <nav className="nav">
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    );
  }
  
  export default Nav;