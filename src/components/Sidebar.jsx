import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2>Sidebar</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link to="/applications">Applications</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/announcements">Announcements</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/student-details">Student Details</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/ngo-details">NGO Details</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/volunteer-details">Volunteer Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
