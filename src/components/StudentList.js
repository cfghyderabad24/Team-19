import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onSelectStudent }) => {
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
                <button className="button" onClick={() => onSelectStudent(student)}>{student.name}</button>
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