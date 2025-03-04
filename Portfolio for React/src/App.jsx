// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';
// import ContactMe from './components/Contact';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import AboutMe from './components/AboutMe';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';




function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div>
//         <header>
//           <nav>
//             <ul>
//               <li><Link to="/">About Me</Link></li>
//               <li><Link to="/resume">Resume</Link></li>
//               <li><Link to="/portfolio">Portfolio</Link></li>
//               <li><Link to="/contact">Contact Me</Link></li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/" exact component={AboutMe} />
//             <Route path="/resume" component={Resume} />
//             <Route path="/portfolio" component={Portfolio} />
//             <Route path="/contact" component={ContactMe} />
//           </Switch>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;