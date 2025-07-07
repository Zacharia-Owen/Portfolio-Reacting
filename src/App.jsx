import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';


function App() {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
}

export default App;
