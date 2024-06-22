<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Applications from './components/Applicants';
import Announcements from './components/Announcements';
import StudentDetails from './components/Students';
import NGODetails from './components/Ngo';
import VolunteerDetails from './components/Volunteer';
import Header from './components/Header';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './components/Aboutus';
import HomePage from './components/Start_page';
import Navbars from './components/Navbar';
>>>>>>> b5cfec44605770fc06af8a1baa0ed821d6ed7a86

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Header/>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/applications" element={<Applications />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/ngo-details" element={<NGODetails />} />
            <Route path="/volunteer-details" element={<VolunteerDetails />} />
            <Route path="/" element={<Applications />} />
          </Routes>
        </div>
=======
import "./App.css";
import StudentForm from './components/Studentsappform'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TrainingPort from './pages/index';
import Courses from "./components/courses";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student-form">Student Form</Link>
            </li>
            <li>
              <Link to="/training-portal">Training Portal</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div className="container home">
              <h1>Welcome to St Bathevara Training Courses</h1>
            </div>
          </Route>
          <Route path="/student-form">
            <div className="container form">
              <h3 className="card-title text-center">Student Application Form</h3>
              <StudentForm />
            </div>
          </Route>
          
          <Route path="/training-portal">
            <div className="container form">
              <h3 className="card-title text-center">Training Portal</h3>
              <TrainingPort />
            </div>
          </Route>
          
          {/* Add more routes for other components */}
        </Switch>
>>>>>>> 172ea40b8cad1343591fff6f6edc3d954803d6c7
      </div>
    </Router>
=======
    <React.Fragment>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </React.Fragment>
>>>>>>> b5cfec44605770fc06af8a1baa0ed821d6ed7a86
  );
};

export default App;
