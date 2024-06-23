import React, { useState } from 'react';
import './StudentList.css';
import StudentDetails from './StudentDetails'; // Assuming StudentDetails component exists

const StudentList = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToList = () => {
    setSelectedStudent(null);
  };

  if (selectedStudent) {
    return <StudentDetails student={selectedStudent} onBack={handleBackToList} />;
  }

  return (
    <div className="student-list">
      <h1>Student Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <span>{student.name}</span>
                <button
                  className="view-details-button"
                  onClick={() => handleViewDetails(student)}
                >
                  View Details
                </button>
              </td>
              <td>
                <button className="button accept">Accept</button>
                <button className="button reject">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;