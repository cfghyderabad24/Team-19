import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Applications from './components/Applicants';
import Announcements from './components/Announcements';
import StudentDetails from './components/Students';
import NGODetails from './components/Ngo';
import VolunteerDetails from './components/Volunteer';
import Header from './components/Header';

const App = () => {
  return (
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
      </div>
    </Router>
  );
};

export default App;
