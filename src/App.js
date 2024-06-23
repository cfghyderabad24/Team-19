// src/App.js\
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/Aboutus';
import TrainingPortal from './pages/index';
import AssessmentForm from './components/Studentsappform';
//import AlumiFrom from './components/Alumniform'
import Home from './components/Start_page'
import NavBar from './components/Navbar'
import NGO from './components/Ngo'
import VolunteerDetails from './components/Volunteer';
import Courses from './components/courses'
import Assessments from './components/assessments'



const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training-portal" element={<TrainingPortal />} />
          <Route path="/student-form" element={<AssessmentForm />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/volunteers" element={<VolunteerDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assessments" element={<Assessments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
