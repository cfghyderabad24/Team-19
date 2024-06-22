import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/Aboutus';
import HomePage from './components/Start_page';
import Navbars from './components/Navbar';
import StudentForm from './components/Studentsappform';
import TrainingPort from './pages/index';
import Courses from './components/courses';

function App() {
  return (
    <Router>
      <Navbars />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/training-portal" element={<TrainingPort />} />
          <Route path="/courses" element={<Courses />} />
          {/* Add more routes for other components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
