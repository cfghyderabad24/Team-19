import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './components/Aboutus';
import HomePage from './components/Start_page';
import Navbars from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
