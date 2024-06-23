import React from 'react';
import './StudentDetails.css';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div className="student-details">
      <h1>{student.name}</h1>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Mobile:</strong> {student.mobile}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Location:</strong> {student.location}</p>
      <h2>Documents</h2>
      <div className="documents">
        {student.documents.map((doc, index) => (
          <img key={index} src={/path/to/documents/${doc}} alt={Document ${index + 1}} />
        ))}
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default StudentDetails;