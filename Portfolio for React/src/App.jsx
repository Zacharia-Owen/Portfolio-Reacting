import { useState } from 'react'
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Developer Name</h1>
          <nav>
            <NavLink to="/" end>About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer>
          <a href="" target="_blank" rel=""><Github /></a>
          <a href="" target="_blank" rel=""><Linkedin /></a>
          <a href="" target="_blank" rel=""><StackOverflow /></a>
        </footer>
      </div>
    </Router>
  );
}
